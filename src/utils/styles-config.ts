import { ThemeProps } from "styled-components";
import { css, Theme } from "../themes";

const maxContentWidth = ({ theme }: ThemeProps<Theme>) => css`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 ${theme.tokens.space[5]};
`;

export { maxContentWidth };
