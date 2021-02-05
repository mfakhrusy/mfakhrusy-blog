import { Tr } from "@chakra-ui/react";
import { PropsWithChildren, ReactElement } from "react";

export function MarkdownTr(
  props: PropsWithChildren<Record<string, unknown>>
): ReactElement {
  return <Tr>{props.children}</Tr>;
}
