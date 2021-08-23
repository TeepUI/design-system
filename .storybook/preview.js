import React from "react";
import { useDarkMode } from "storybook-dark-mode";
import { themes } from "@storybook/theming";
import { ThemeProvider } from "../src";
import { DocsContainer as BaseContainer } from "@storybook/addon-docs/blocks";

function ThemeWrapper(props) {
  const isDarkMode = useDarkMode();

  return (
    <ThemeProvider theme={isDarkMode ? "dark" : "light"}>
      {props.children}
    </ThemeProvider>
  );
}

function DocsContainer(props) {
  const dark = useDarkMode();

  return (
    <BaseContainer
      context={{
        ...props.context,
        parameters: {
          ...props.context.parameters,
          docs: {
            theme: dark ? themes.dark : themes.light,
          },
        },
      }}
    >
      <ThemeWrapper {...props} />
    </BaseContainer>
  );
}

export const parameters = {
  actions: { argTypesRegex: "^on.*" },
  options: {
    storySort: {
      order: ["Docs", ["Getting Started", "Color System", "Typography"]],
    },
  },
  docs: {
    container: DocsContainer,
  },
};

export const decorators = [
  (renderStory) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
];
