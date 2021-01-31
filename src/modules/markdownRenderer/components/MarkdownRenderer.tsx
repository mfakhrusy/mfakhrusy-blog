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
import { MarkdownTbody } from "./MarkdownTBody";
import { MarkdownThead } from "./MarkdownTHead";
import { MarkdownThematicBreak } from "./MarkdownThematicBreak";
import { MarkdownTr } from "./MarkdownTR";

type Props = {
  content: string;
};

export function MarkdownRenderer({ content }: Props): JSX.Element {
  return (
    <ReactMarkdown
      plugins={[remarkGemoji, gfm]}
      escapeHtml={false}
      source={content}
      renderers={{
        code: CodeBlock,
        heading: MarkdownHeading,
        thematicBreak: MarkdownThematicBreak,
        listItem: MarkdownListItem,
        list: MarkdownList,
        blockquote: MarkdownBlockQuote,
        table: MarkdownTable,
        tableHead: MarkdownThead,
        tableBody: MarkdownTbody,
        tableRow: MarkdownTr,
        tableCell: MarkdownTableCell,
      }}
    />
  );
}
