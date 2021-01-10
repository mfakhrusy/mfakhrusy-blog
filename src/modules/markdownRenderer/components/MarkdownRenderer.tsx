import ReactMarkdown from "react-markdown";
import { CodeBlock } from "./CodeBlock";
import { MarkdownHeading } from "./MarkdownHeading";

type Props = {
  content: string;
};

export function MarkdownRenderer({ content }: Props): JSX.Element {
  return (
    <ReactMarkdown
      escapeHtml={false}
      source={content}
      renderers={{
        code: CodeBlock,
        heading: MarkdownHeading,
      }}
    />
  );
}
