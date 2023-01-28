import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 *{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
 }
 html{
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.colors.gray[100]};
  }

body{
  background: ${({ theme }) => theme.colors.background};
  overflow-x: hidden;
}

`;
