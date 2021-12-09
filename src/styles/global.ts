import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #ECFAFA;
  }

  button {
    border:none;
    outline: none;
    cursor: pointer;
  }

  input, textarea {
    background-color: #fff;
    border: none;
    outline: none;
    &:focus, &:hover {
      border: 2px solid #67A1F9;

    }
  }
  
  ul, li, p, h3 {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a{
    text-decoration: none;
  }
`
export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
