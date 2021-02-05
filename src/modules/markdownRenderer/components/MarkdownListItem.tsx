import { ListItem } from "@chakra-ui/react";
import { PropsWithChildren, ReactElement } from "react";

export function MarkdownListItem(
  props: PropsWithChildren<Record<string, unknown>>
): ReactElement {
  return <ListItem>{props.children}</ListItem>;
}
