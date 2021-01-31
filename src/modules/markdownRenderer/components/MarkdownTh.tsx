import { Th } from "@chakra-ui/react";
import { PropsWithChildren, ReactElement } from "react";

export function MarkdownTh(props: PropsWithChildren<Record<string, unknown>>): ReactElement {
  return <Th>{props.children}</Th>;
}
