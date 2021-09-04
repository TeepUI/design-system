import { css, styled } from "./themes";

const Root = styled.header(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.header.background};
    padding: 0 ${theme.tokens.space[5]};
    min-height: 80px;

    > *:not(:last-child) {
      margin-right: ${theme.tokens.space[3]};
    }
  `
);

const HeaderItem = styled.div<{ full?: boolean }>(
  ({ full }) => css`
    ${full
      ? css`
          flex-grow: 1;
        `
      : null}
  `
);

const Header = Object.assign(Root, { Item: HeaderItem });

export { Header };
