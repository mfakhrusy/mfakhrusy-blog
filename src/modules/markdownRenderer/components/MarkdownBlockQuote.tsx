import styled from "@emotion/styled";
import { PropsWithChildren, ReactElement } from "react";

const BlockQuote = styled.blockquote`
  padding: 10px 20px;
  border-left: 5px solid #eee;
  margin: 0 0 20px;
  font-size: 17.5px;
`;

export function MarkdownBlockQuote(
  props: PropsWithChildren<Record<string, unknown>>
): ReactElement {
  return <BlockQuote>{props.children}</BlockQuote>;
}
