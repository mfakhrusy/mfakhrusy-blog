import { Tbody } from "@chakra-ui/react";
import { PropsWithChildren, ReactElement } from "react";

export function MarkdownTbody(
  props: PropsWithChildren<Record<string, unknown>>
): ReactElement {
  return <Tbody>{props.children}</Tbody>;
}
