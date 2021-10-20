const tokens = {
  space: {
    0: "0px",
    1: "4px",
    2: "8px",
    3: "16px",
    4: "24px",
    5: "32px",
  },
  corners: {
    0: "0px",
    1: "2px",
    2: "4px",
    3: "6px",
    4: "8px",
  },
  colors: {
    primary: "#4795EE",
    white: "#FFFFFF",
    black: "#000000",
    blue: {
      100: "#D6E1EE",
      200: "#BED5EE",
      300: "#A7C8EE",
      400: "#8FBBEE",
      500: "#77AFEE",
      600: "#5FA2EE",
      700: "#4795EE",
      800: "#3088EE",
      900: "#187CEE",
    },
    gray: {
      100: "#E7E7E7",
      200: "#CCCCCC",
      300: "#B2B2B2",
      400: "#999999",
      500: "#808080",
      600: "#666666",
      700: "#4D4D4D",
      800: "#333333",
      900: "#1A1A1A",
    },
    pink: {
      100: "#FEEAE3",
      200: "#FED0C8",
      300: "#FEB2AD",
      400: "#FD989C",
      500: "#FD7788",
      600: "#D95673",
      700: "#B63B62",
      800: "#922551",
      900: "#791647",
    },
    green: {
      100: "#E5FCDE",
      200: "#C7FABE",
      300: "#9FF09A",
      400: "#7DE181",
      500: "#54CE64",
      600: "#3DB157",
      700: "#2A944B",
      800: "#1A7740",
      900: "#106239",
    },
  },
  font: {
    sizes: {
      h1: "3.052rem",
      h2: "2.441rem",
      h3: "1.953rem",
      h4: "1.563rem",
      h5: "1.25rem",
      body1: "1rem",
      body2: "0.8rem",
      button: "0.64rem",
      caption: "0.512rem",
    },
  },
};

type Tokens = typeof tokens;

export type { Tokens };
export { tokens };
