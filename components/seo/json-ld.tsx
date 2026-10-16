import type { JsonLdValue } from "@/models/seo/schemas";

export function JsonLd({ data }: { data: JsonLdValue }) {
  const serialized = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialized }}
    />
  );
}
