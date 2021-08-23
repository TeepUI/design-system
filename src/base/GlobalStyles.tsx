import { createGlobalStyle } from "../themes";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Poppins:400');

  html {font-size: 112.5%;} /*18px*/

  body {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.75;
    color: ${(props) => props.theme.color};
  }

  p {margin-bottom: 1rem;}

  h1, h2, h3, h4, h5 {
    margin: 3rem 0 1.38rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.3;
  }

  h1 {
    margin-top: 0;
    font-size: 4.209rem;
  }

  h2 {font-size: 3.157rem;}

  h3 {font-size: 2.369rem;}

  h4 {font-size: 1.777rem;}

  h5 {font-size: 1.333rem;}

  small, .text_small {font-size: 0.75rem;}
`;

export { GlobalStyles };
