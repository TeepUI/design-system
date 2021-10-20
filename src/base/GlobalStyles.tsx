import { createGlobalStyle, css } from "../themes";

const GlobalStyles = createGlobalStyle(
  ({ theme }) => css`
    /* Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property */
    *:where(:not(iframe, canvas, img, svg, video, pre):not(svg *)) {
      all: unset;
      display: revert;
    }

    /* Preferred box-sizing value */
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }

    *:focus {
      outline: 2px solid ${theme.tokens.colors.primary};
      outline-offset: 2px;
    }

    /*
      Remove list styles (bullets/numbers)
      in case you use it combine with normalize.css
    */
    ol,
    ul {
      list-style: none;
    }

    /* For images to not be able to exceed their container */
    img {
      max-width: 100%;
    }

    /* removes spacing between cells in tables */
    table {
      border-collapse: collapse;
    }

    /* revert the 'white-space' property for textarea elements on Safari */
    textarea {
      white-space: revert;
    }

    html {
      font-size: 100%;
    }

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
      font-weight: 500;
      color: ${theme.link.color};
      text-decoration: none;
      cursor: pointer;

      :hover {
        text-decoration: underline;
      }
    }
  `
);

export { GlobalStyles };
