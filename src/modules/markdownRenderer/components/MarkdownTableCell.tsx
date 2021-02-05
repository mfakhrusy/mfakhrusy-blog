import { PropsWithChildren, ReactElement } from "react";
import { MarkdownTd } from "./MarkdownTd";
import { MarkdownTh } from "./MarkdownTh";

type Props = {
  isHeader: boolean;
};

export function MarkdownTableCell(
  props: PropsWithChildren<Props>
): ReactElement {
  if (props.isHeader) {
    return <MarkdownTh>{props.children}</MarkdownTh>;
  } else {
    return <MarkdownTd>{props.children}</MarkdownTd>;
  }
}
