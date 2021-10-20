import { Tokens, tokens } from "./tokens";

type Theme = {
  tokens: Tokens;
  header: {
    logoColor: string;
  };
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
  button: {
    primary: {
      buttonColor: string;
      buttonColorHovered: string;
      textColor: string;
    };
    secondary: {
      buttonColor: string;
      buttonColorHovered: string;
      textColor: string;
      textColorHovered: string;
    };
    text: {
      color: string;
      colorHovered: string;
    };
  };
  link: {
    color: string;
  };
  mark: {
    background: string;
  };
  spotlightSearch: {
    overlayBackground: string;
    modalBackground: string;
    modalTextColor: string;
    dividerColor: string;
    clearIconOutlineColor: string;
    labelColor: string;
    selectedItemBackground: string;
  };
  card: {
    titleColor: string;
    titleHoverColor: string;
    textColor: string;
    imageBackground: string;
    noImageIconColor: string;
    dateColor: string;
  };
};

const darkTheme: Theme = {
  tokens,
  header: {
    logoColor: tokens.colors.white,
  },
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
  button: {
    primary: {
      buttonColor: tokens.colors.primary,
      buttonColorHovered: tokens.colors.blue[800],
      textColor: tokens.colors.white,
    },
    secondary: {
      buttonColor: tokens.colors.white,
      buttonColorHovered: tokens.colors.gray[200],
      textColor: tokens.colors.white,
      textColorHovered: tokens.colors.gray[200],
    },
    text: {
      color: tokens.colors.white,
      colorHovered: tokens.colors.gray[200],
    },
  },
  link: {
    color: tokens.colors.blue[600],
  },
  mark: {
    background: tokens.colors.green[200],
  },
  spotlightSearch: {
    overlayBackground: `rgba(0, 0, 0, 0.5)`,
    modalBackground: tokens.colors.gray[800],
    modalTextColor: tokens.colors.white,
    dividerColor: tokens.colors.gray[700],
    clearIconOutlineColor: `rgba(255, 255, 255, 0.3)`,
    labelColor: tokens.colors.gray[300],
    selectedItemBackground: tokens.colors.gray[700],
  },
  card: {
    titleColor: tokens.colors.white,
    titleHoverColor: tokens.colors.gray[100],
    textColor: tokens.colors.gray[400],
    imageBackground: tokens.colors.gray[900],
    noImageIconColor: tokens.colors.gray[800],
    dateColor: tokens.colors.gray[600],
  },
};

const lightTheme: Theme = {
  tokens,
  header: {
    logoColor: tokens.colors.black,
  },
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
  button: {
    primary: {
      buttonColor: tokens.colors.primary,
      buttonColorHovered: tokens.colors.blue[600],
      textColor: tokens.colors.white,
    },
    secondary: {
      buttonColor: tokens.colors.primary,
      buttonColorHovered: tokens.colors.blue[600],
      textColor: tokens.colors.primary,
      textColorHovered: tokens.colors.blue[600],
    },
    text: {
      color: tokens.colors.black,
      colorHovered: tokens.colors.gray[700],
    },
  },
  link: {
    color: tokens.colors.blue[900],
  },
  mark: {
    background: tokens.colors.green[200],
  },
  spotlightSearch: {
    overlayBackground: `rgba(0, 0, 0, 0.5)`,
    modalBackground: tokens.colors.gray[100],
    modalTextColor: tokens.colors.black,
    dividerColor: tokens.colors.gray[200],
    clearIconOutlineColor: `rgba(0, 0, 0, 0.2)`,
    labelColor: tokens.colors.gray[700],
    selectedItemBackground: tokens.colors.gray[200],
  },
  card: {
    titleColor: tokens.colors.black,
    titleHoverColor: tokens.colors.gray[800],
    textColor: tokens.colors.gray[600],
    imageBackground: tokens.colors.gray[200],
    noImageIconColor: tokens.colors.gray[300],
    dateColor: tokens.colors.gray[400],
  },
};

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

export type { Theme };
export { themes };
