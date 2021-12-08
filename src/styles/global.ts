import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ECFAFA;
  }

  button {
    border:none;
    outline: none;
  }

  input {
    background-color: #fff;
    border: none;
    outline: none;
  }

  input:focus {
    border: 2px solid #67A1F9;
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`