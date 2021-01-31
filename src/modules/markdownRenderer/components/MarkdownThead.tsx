import { Thead } from "@chakra-ui/react";
import { PropsWithChildren, ReactElement } from "react";

export function MarkdownThead(props: PropsWithChildren<Record<string, unknown>>): ReactElement {
  return <Thead>{props.children}</Thead>;
}
