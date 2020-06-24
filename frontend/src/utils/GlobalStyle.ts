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
    color: ${({ theme }) => theme.textPrimary};
  }

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *:focus {
    outline-color: ${({ theme }) => theme.primary};
  }

  button, input, textarea, a {
    font-family: inherit;
    font-size: inherit;
  }

  img {
    max-width: 100%;
  }
`;

export default GlobalStyle;
