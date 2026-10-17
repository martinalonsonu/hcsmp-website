import { console } from "node:console";
import { readFile, readdir } from "node:fs/promises";
import { resolve } from "node:path";
import process from "node:process";

const limits = { critical: 0, high: 0, moderate: 10, low: 100 };
const labels = {
  critical: "Crítica",
  high: "Alta",
  moderate: "Moderada",
  low: "Baja",
};

function emptyCounts() {
  return { critical: 0, high: 0, moderate: 0, low: 0 };
}

function normalizeSeverity(value) {
  return value === "medium" ? "moderate" : value;
}

function addSeverity(counts, severity) {
  const normalized = normalizeSeverity(severity);
  if (Object.hasOwn(counts, normalized)) counts[normalized] += 1;
}

function severityFromScore(rawScore) {
  const score = Number(rawScore);
  if (!Number.isFinite(score) || score <= 0) return null;
  if (score > 9) return "critical";
  if (score >= 7) return "high";
  if (score >= 4) return "moderate";
  if (score >= 0.1) return "low";
  return null;
}

async function findSarifFiles(directory) {
  const files = [];

  async function visit(currentDirectory) {
    const entries = await readdir(currentDirectory, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = resolve(currentDirectory, entry.name);
      if (entry.isDirectory()) {
        await visit(fullPath);
      } else if (entry.isFile() && entry.name.toLowerCase().endsWith(".sarif")) {
        files.push(fullPath);
      }
    }
  }

  await visit(directory);
  return files;
}

async function readCodeQlCounts(directory) {
  const files = await findSarifFiles(directory);
  if (files.length === 0) {
    throw new Error("CodeQL no generó archivos SARIF para analizar.");
  }

  const counts = emptyCounts();

  for (const file of files) {
    const sarif = JSON.parse(await readFile(file, "utf8"));
    for (const run of sarif.runs ?? []) {
      const rules = run.tool?.driver?.rules ?? [];

      for (const result of run.results ?? []) {
        if (result.suppressions?.some(({ status }) => status === "accepted")) {
          continue;
        }

        const rule =
          rules.find(({ id }) => id === result.ruleId) ??
          rules[result.ruleIndex];
        const score =
          result.properties?.["security-severity"] ??
          rule?.properties?.["security-severity"];
        if (score === undefined) continue;

        const severity = severityFromScore(score);
        if (severity) counts[severity] += 1;
      }
    }
  }

  return counts;
}

async function readDependencyCounts(file) {
  const report = JSON.parse(await readFile(file, "utf8"));
  const metadataCounts = report.metadata?.vulnerabilities;

  if (metadataCounts && typeof metadataCounts === "object") {
    const counts = emptyCounts();
    for (const severity of Object.keys(counts)) {
      const count = metadataCounts[severity] ?? 0;
      if (!Number.isInteger(count) || count < 0) {
        throw new Error("El reporte de pnpm audit tiene conteos inválidos.");
      }
      counts[severity] = count;
    }
    return counts;
  }

  if (report.advisories && typeof report.advisories === "object") {
    const counts = emptyCounts();
    for (const advisory of Object.values(report.advisories)) {
      addSeverity(counts, advisory.severity);
    }
    return counts;
  }

  throw new Error(
    "No se reconoció el formato JSON de pnpm audit; se bloquea el merge para evitar omitir vulnerabilidades.",
  );
}

function printSummary(codeQlCounts, dependencyCounts) {
  const totalCounts = emptyCounts();
  const rows = Object.keys(limits).map((severity) => {
    totalCounts[severity] =
      codeQlCounts[severity] + dependencyCounts[severity];
    const withinLimit = totalCounts[severity] <= limits[severity];

    return [
      labels[severity],
      codeQlCounts[severity],
      dependencyCounts[severity],
      totalCounts[severity],
      limits[severity],
      withinLimit ? "Dentro del límite" : "Supera el límite",
    ];
  });

  console.log("Vulnerabilidades encontradas en la rama:");
  console.table(
    rows.map(
      ([severity, codeQl, dependencies, total, limit, status]) => ({
        severidad: severity,
        CodeQL: codeQl,
        dependencias: dependencies,
        total,
        máximo: limit,
        estado: status,
      }),
    ),
  );

  const exceeded = Object.entries(limits)
    .filter(([severity, maximum]) => totalCounts[severity] > maximum)
    .map(
      ([severity, maximum]) =>
        labels[severity] + ": " + totalCounts[severity] + " > " + maximum,
    );

  if (exceeded.length > 0) {
    throw new Error(
      "Umbrales de vulnerabilidades superados: " + exceeded.join(", "),
    );
  }
}

const sarifDirectory = process.env.CODEQL_SARIF_DIR;
if (!sarifDirectory) {
  throw new Error("Falta definir CODEQL_SARIF_DIR.");
}

const [codeQlCounts, dependencyCounts] = await Promise.all([
  readCodeQlCounts(sarifDirectory),
  readDependencyCounts(resolve("branch-audit.json")),
]);

printSummary(codeQlCounts, dependencyCounts);
