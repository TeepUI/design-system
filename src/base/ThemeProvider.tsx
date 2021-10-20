import { GlobalStyles } from "./GlobalStyles";
import React, { PropsWithChildren } from "react";
import { StyledThemeProvider, themes } from "../themes";
import { Helmet } from "react-helmet";

type ThemeProviderProps = {
  theme: "dark" | "light";
};

function ThemeProvider(props: PropsWithChildren<ThemeProviderProps>) {
  return (
    <StyledThemeProvider
      theme={props.theme === "dark" ? themes.dark : themes.light}
    >
      <GlobalStyles />
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      {props.children}
    </StyledThemeProvider>
  );
}

export { ThemeProvider };
