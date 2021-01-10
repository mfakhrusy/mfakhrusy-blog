import ReactMarkdown from "react-markdown";
import { Heading } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

type Props = {
  level: number;
};

export function MarkdownHeading(props: PropsWithChildren<Props>): JSX.Element {
  if (props.level === 1) {
    return <Heading size="xl">{props.children}</Heading>;
  }

  const Component = ReactMarkdown.renderers.heading;
  return <Component {...props} />;
}
