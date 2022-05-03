import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --font: 'Roboto', sans-serif;

    --dark-white: #D8DEE9;
    --light-white: #E5E9F0;
    --white: #ECEFF4;

    --dark: #2E3440;
    --light-dark: #434C5E;
    --lightish-dark: #4C566A;
    --grey: #3B4252;

    --normal: 400;
    --bold: 700;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font);
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--dark-white);
    color: var(--dark);
  }
  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  .App {
    width: 100%;
  }
`
