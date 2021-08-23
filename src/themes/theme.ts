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
  color: "white",
  blockquote: {
    border: "white",
  },
  inlineCode: {
    background: "#ff9daa",
    color: "black",
  },
};

const lightTheme: Theme = {
  color: "black",
  blockquote: {
    border: "black",
  },
  inlineCode: {
    background: "#ffd7c7",
    color: "black",
  },
};

const themes = {
  dark: darkTheme,
  light: lightTheme,
};

export type { Theme };
export { themes };
