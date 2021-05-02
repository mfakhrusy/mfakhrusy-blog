import ReactMarkdown from "react-markdown";
import remarkGemoji from "remark-gemoji";
import gfm from "remark-gfm";
import { CodeBlock } from "./CodeBlock";
import { MarkdownBlockQuote } from "./MarkdownBlockQuote";
import { MarkdownHeading } from "./MarkdownHeading";
import { MarkdownList } from "./MarkdownList";
import { MarkdownListItem } from "./MarkdownListItem";
import { MarkdownTable } from "./MarkdownTable";
import { MarkdownTableCell } from "./MarkdownTableCell";
import { MarkdownTbody } from "./MarkdownTbody";
import { MarkdownThead } from "./MarkdownThead";
import { MarkdownThematicBreak } from "./MarkdownThematicBreak";
import { MarkdownTr } from "./MarkdownTr";

type Props = {
  content: string;
};

export function MarkdownRenderer({ content }: Props): JSX.Element {
  return (
    <ReactMarkdown
      plugins={[remarkGemoji, gfm]}
      children={content}
      components={{
        h1: MarkdownHeading,
        h2: MarkdownHeading,
        h3: MarkdownHeading,
        h4: MarkdownHeading,
        h5: MarkdownHeading,
        h6: MarkdownHeading,
        hr: MarkdownThematicBreak,
        li: MarkdownListItem,
        ol: MarkdownList,
        ul: MarkdownList,
        blockquote: MarkdownBlockQuote,
        table: MarkdownTable,
        th: MarkdownThead,
        tbody: MarkdownTbody,
        tr: MarkdownTr,
        td: MarkdownTableCell,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        code: ({ node, ...props }) => <CodeBlock {...props} />,
      }}
    />
  );
}
