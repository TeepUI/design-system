import { Tokens, tokens } from "./tokens";

type Theme = {
  tokens: Tokens;
  body: {
    background: string;
    color: string;
  };
  blockquote: {
    border: string;
  };
  inlineCode: {
    background: string;
    color: string;
  };
  header: {
    background: string;
  };
  button: {
    primary: {
      buttonColor: string;
      textColor: string;
    };
    secondary: {
      buttonColor: string;
      textColor: string;
    };
  };
  link: {
    color: string;
  };
  mark: {
    background: string;
  };
};

const darkTheme: Theme = {
  tokens,
  body: {
    background: tokens.colors.black,
    color: tokens.colors.white,
  },
  blockquote: {
    border: tokens.colors.white,
  },
  inlineCode: {
    background: tokens.colors.pink[400],
    color: tokens.colors.black,
  },
  header: {
    background: tokens.colors.gray[900],
  },
  button: {
    primary: {
      buttonColor: tokens.colors.primary,
      textColor: tokens.colors.white,
    },
    secondary: {
      buttonColor: tokens.colors.white,
      textColor: tokens.colors.white,
    },
  },
  link: {
    color: tokens.colors.blue[600],
  },
  mark: {
    background: tokens.colors.green[200],
  },
};

const lightTheme: Theme = {
  tokens,
  body: {
    background: tokens.colors.gray[100],
    color: tokens.colors.black,
  },
  blockquote: {
    border: tokens.colors.black,
  },
  inlineCode: {
    background: tokens.colors.pink[100],
    color: tokens.colors.black,
  },
  header: {
    background: tokens.colors.white,
  },
  button: {
    primary: {
      buttonColor: tokens.colors.primary,
      textColor: tokens.colors.white,
    },
    secondary: {
      buttonColor: tokens.colors.primary,
      textColor: tokens.colors.primary,
    },
  },
  link: {
    color: tokens.colors.blue[900],
  },
  mark: {
    background: tokens.colors.green[200],
  },
};

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

export type { Theme };
export { themes };
