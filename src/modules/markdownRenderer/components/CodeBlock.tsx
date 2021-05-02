import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import style from "react-syntax-highlighter/dist/cjs/styles/prism/dracula";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export function CodeBlock({ children, className }: Props): JSX.Element {
  const language = className.split("-")[1];
  return (
    <SyntaxHighlighter style={style} language={language}>
      {children}
    </SyntaxHighlighter>
  );
}
