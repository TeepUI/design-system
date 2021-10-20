import { css, styled } from "./themes";

const H1 = styled.h1(
  ({ theme }) => css`
    font-size: ${theme.tokens.font.sizes.h1};
  `
);

const H2 = styled.h2(
  ({ theme }) => css`
    font-size: ${theme.tokens.font.sizes.h2};
  `
);

const H3 = styled.h3(
  ({ theme }) => css`
    font-size: ${theme.tokens.font.sizes.h3};
  `
);

const H4 = styled.h4(
  ({ theme }) => css`
    font-size: ${theme.tokens.font.sizes.h4};
  `
);

const Body1 = styled.p(
  ({ theme }) => css`
    font-size: ${theme.tokens.font.sizes.body1};
  `
);

const Body2 = styled.p(
  ({ theme }) => css`
    font-size: ${theme.tokens.font.sizes.body2};
  `
);

const H5 = styled.h5(
  ({ theme }) => css`
    font-size: ${theme.tokens.font.sizes.h5};
  `
);

const Button = styled.p(
  ({ theme }) => css`
    font-size: ${theme.tokens.font.sizes.button};
  `
);

const Caption = styled.span(
  ({ theme }) => css`
    font-size: ${theme.tokens.font.sizes.caption};
  `
);

const Typography = Object.assign(
  {},
  {
    H1,
    H2,
    H3,
    H4,
    H5,
    Body1,
    Body2,
    Button,
    Caption,
  }
);

export { Typography };
