import { css, styled } from "../themes";

const Form = styled.form(
  ({ theme }) => css`
    display: grid;
    grid-gap: ${theme.tokens.space[2]};
  `
);

export { Form };
