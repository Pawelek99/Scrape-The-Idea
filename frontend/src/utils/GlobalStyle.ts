import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-size: 1.4rem;
    line-height: 1.5;
    overscroll-behavior-y: contain;
    background-color: ${({ theme }) => theme.background};
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  button, input, textarea, a {
    font-family: inherit;
  }
`;

export default GlobalStyle;
