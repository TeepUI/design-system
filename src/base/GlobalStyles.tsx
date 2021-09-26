import { createGlobalStyle, css } from "../themes";

const GlobalStyles = createGlobalStyle(
  ({ theme }) => css`
    * {
      box-sizing: border-box;
    }

    html {
      font-size: 100%;
    } /* 16px */

    body {
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      line-height: 1.75;
      color: ${theme.body.color};
      background: ${theme.body.background};
    }

    p {
      margin-bottom: 1rem;
    }

    mark {
      background: ${theme.mark.background};
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
      margin: 3rem 0 1rem;
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      line-height: 1.5;
    }

    h1 {
      margin-top: 0;
      font-size: 3.167em;
    }

    h2 {
      font-size: 2.5em;
    }

    h3 {
      font-size: 2em;
    }

    h4 {
      font-size: 1.5em;
    }

    h5 {
      font-size: 1.25em;
    }

    a {
      font-weight: bold;
      color: ${theme.link.color};
      text-decoration: none;

      :hover {
        text-decoration: underline;
      }
    }
  `
);

export { GlobalStyles };
