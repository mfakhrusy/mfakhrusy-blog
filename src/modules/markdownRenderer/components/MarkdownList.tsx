import { ReactElement } from "react";
import { MarkdownOrderedList } from "./MarkdownOrderedList";
import { MarkdownUnorderedList } from "./MarkdownUnorderedList";

type Props = {
  ordered: boolean;
};

export function MarkdownList({ ordered, ...props }: Props): ReactElement {
  if (ordered) {
    return <MarkdownOrderedList {...props} />;
  } else {
    return <MarkdownUnorderedList {...props} />;
  }
}
