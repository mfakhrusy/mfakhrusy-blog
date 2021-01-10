import ReactMarkdown from "react-markdown";
import { CodeBlock } from "./CodeBlock";

type Props = {
  content: string;
};

export function MarkdownRenderer({ content }: Props): JSX.Element {
  return (
    <ReactMarkdown
      escapeHtml={false}
      source={content}
      renderers={{ code: CodeBlock }}
    />
  );
}
