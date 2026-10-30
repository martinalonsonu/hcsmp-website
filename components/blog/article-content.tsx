import ReactMarkdown, { type Components } from "react-markdown";

const markdownComponents: Components = {
  h1: ({ children }) => (
    <h2 className="mb-5 mt-14 border-t border-line pt-8 font-display text-2xl leading-snug sm:text-3xl">
      {children}
    </h2>
  ),
  h2: ({ children }) => (
    <h2 className="mb-5 mt-14 border-t border-line pt-8 font-display text-2xl leading-snug sm:text-3xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-4 mt-10 font-display text-xl leading-snug sm:text-2xl">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="mt-6 text-base leading-[1.95] text-muted sm:text-[17px]">
      {children}
    </p>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-ink">{children}</strong>
  ),
  ol: ({ children }) => (
    <ol className="mt-6 flex list-decimal flex-col gap-4 pl-6 text-base leading-8 text-muted marker:font-semibold marker:text-clay-text">
      {children}
    </ol>
  ),
  ul: ({ children }) => (
    <ul className="mt-6 flex list-disc flex-col gap-4 pl-6 text-base leading-8 text-muted marker:text-clay-text">
      {children}
    </ul>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="my-10 border-l-2 border-clay bg-mist/50 px-6 py-3 font-display text-xl leading-relaxed text-ink sm:px-8 sm:text-2xl [&_p]:my-4 [&_p]:font-display [&_p]:text-xl [&_p]:leading-relaxed [&_p]:text-ink sm:[&_p]:text-2xl">
      {children}
    </blockquote>
  ),
};

export function ArticleContent({ content }: { content: string }) {
  return (
    <div className="prose-news mt-10 max-w-[46rem] sm:mt-12">
      <ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown>
    </div>
  );
}
