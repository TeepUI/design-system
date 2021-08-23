import React, { PropsWithChildren } from "react";
import { styled } from "./themes";

function Markdown(props: PropsWithChildren<unknown>) {
  return <Root>{props.children}</Root>;
}

const Root = styled.div`
  blockquote {
    border-left: 4px solid ${(props) => props.theme.blockquote.border};
    padding-left: 16px;

    :not(blockquote > blockquote) {
      margin-left: 0;
    }
  }

  code {
    padding: 2.88px 0.4em;
    background: ${({ theme }) => theme.inlineCode.background};
    color: ${({ theme }) => theme.inlineCode.color};
    border-radius: 3px;
  }

  ul:not(ul > ul),
  ol:not(ol > ol) {
    padding-left: 0;
    margin-left: 24px;
  }
`;

export { Markdown };
