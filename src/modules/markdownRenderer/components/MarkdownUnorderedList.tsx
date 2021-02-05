import { UnorderedList } from "@chakra-ui/react";
import { PropsWithChildren, ReactElement } from "react";

export function MarkdownUnorderedList(
  props: PropsWithChildren<Record<string, unknown>>
): ReactElement {
  return <UnorderedList>{props.children}</UnorderedList>;
}
