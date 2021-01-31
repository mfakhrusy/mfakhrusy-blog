import { Table } from "@chakra-ui/react";
import { PropsWithChildren, ReactElement } from "react";

export function MarkdownTable(props: PropsWithChildren<Record<string, unknown>>): ReactElement {
  return <Table>{props.children}</Table>;
}
