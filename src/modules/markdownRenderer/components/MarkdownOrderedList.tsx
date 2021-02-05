import { OrderedList } from "@chakra-ui/react";
import { PropsWithChildren, ReactElement } from "react";

export function MarkdownOrderedList(
  props: PropsWithChildren<Record<string, unknown>>
): ReactElement {
  return <OrderedList>{props.children}</OrderedList>;
}
