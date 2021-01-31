import { Td } from "@chakra-ui/react";
import { PropsWithChildren, ReactElement } from "react";

export function MarkdownTd(props: PropsWithChildren<Record<string, unknown>>): ReactElement {
  return <Td>{props.children}</Td>;
}
