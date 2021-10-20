import { Typography } from "./Typography";
import { css, styled } from "./themes";
import { maxContentWidth } from "./utils/styles-config";

const Root = styled.header(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    min-height: 80px;
    ${maxContentWidth};

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

const Logo = styled.a(
  ({ theme }) => css`
    margin: 0;
    color: ${theme.header.logoColor};
    cursor: pointer;
    font-size: ${theme.tokens.font.sizes.h4};

    :hover {
      text-decoration: none;
    }
  `
);

const Header = Object.assign(Root, { Logo, Item: HeaderItem });

export { Header };
