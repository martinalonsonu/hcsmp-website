import {
  institutionalPageByPath,
  type InstitutionalPage,
} from "@/models/hermandad/institutional-pages";

const parentAliases: Readonly<Record<string, string>> = {
  "/fiesta": "/hermandad/fiesta",
};

/** Use only published destinations in visible and structured breadcrumbs. */
export function getInstitutionalBreadcrumbs(
  page: Pick<InstitutionalPage, "path" | "title">,
) {
  const segments = page.path.split("/").filter(Boolean);
  return [
    { name: "Inicio", path: "/" },
    ...segments.flatMap((_, index) => {
      const segmentPath = `/${segments.slice(0, index + 1).join("/")}`;
      const path = parentAliases[segmentPath] ?? segmentPath;
      const parent = institutionalPageByPath.get(path);
      if (parent) return [{ name: parent.title, path }];
      return index === segments.length - 1
        ? [{ name: page.title, path: page.path }]
        : [];
    }),
  ];
}
