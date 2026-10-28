import ReactMarkdown, { type Components } from "react-markdown";

const markdownComponents: Components = {
  h1: ({ children }) => (
    <h2 className="mt-10 font-display text-2xl leading-snug sm:text-3xl">
      {children}
    </h2>
  ),
  h2: ({ children }) => (
    <h2 className="mt-10 font-display text-2xl leading-snug sm:text-3xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-8 font-display text-xl leading-snug sm:text-2xl">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mt-5 text-base leading-8 text-muted">{children}</p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-ink">{children}</strong>
  ),
  ol: ({ children }) => (
    <ol className="mt-5 flex list-decimal flex-col gap-3 pl-6 text-base leading-8 text-muted">
      {children}
    </ol>
  ),
  ul: ({ children }) => (
    <ul className="mt-5 flex list-disc flex-col gap-3 pl-6 text-base leading-8 text-muted">
      {children}
    </ul>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-8 border-l-2 border-clay pl-5 font-display text-lg leading-relaxed text-ink sm:text-2xl">
      {children}
    </blockquote>
  ),
};

export function ArticleContent({ content }: { content: string }) {
  return (
    <div className="prose-news mt-8">
      <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
    </div>
  );
}
