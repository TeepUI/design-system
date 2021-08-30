import { tokens } from "./tokens";

type Theme = {
  color: string;
  blockquote: {
    border: string;
  };
  inlineCode: {
    background: string;
    color: string;
  };
};

const darkTheme: Theme = {
  color: tokens.colors.white,
  blockquote: {
    border: tokens.colors.white,
  },
  inlineCode: {
    background: tokens.colors.pink[400],
    color: tokens.colors.black,
  },
};

const lightTheme: Theme = {
  color: tokens.colors.black,
  blockquote: {
    border: tokens.colors.black,
  },
  inlineCode: {
    background: tokens.colors.pink[100],
    color: tokens.colors.black,
  },
};

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

export type { Theme };
export { themes };
