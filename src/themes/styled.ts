import * as styledComponents from "styled-components";
import {
  ThemedStyledComponentsModule,
  ThemedStyledProps,
} from "styled-components";
import { Theme } from "./theme";

const {
  default: styled,
  keyframes,
  css,
  ThemeProvider: StyledThemeProvider,
  createGlobalStyle,
} = (styledComponents as any) as ThemedStyledComponentsModule<Theme>;

type StyledProps<T> = ThemedStyledProps<T, Theme>;

export type { StyledProps };
export { styled, css, StyledThemeProvider, createGlobalStyle, keyframes };
