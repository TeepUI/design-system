import { GlobalStyles } from "./GlobalStyles";
import React, { PropsWithChildren } from "react";
import { StyledThemeProvider, themes } from "../themes";

type ThemeProviderProps = {
  theme: "dark" | "light";
};

function ThemeProvider(props: PropsWithChildren<ThemeProviderProps>) {
  return (
    <StyledThemeProvider
      theme={props.theme === "dark" ? themes.dark : themes.light}
    >
      <GlobalStyles />
      {props.children}
    </StyledThemeProvider>
  );
}

export { ThemeProvider };
