import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  PRIMARY: '#827AFD',
  SECONDARY: '#00BF20',
  TERTIARY: '#23232C',
  TEXT: '#000',
};

export const darkTheme = {
  PRIMARY: '#827AFD',
  SECONDARY: '#00BF20',
  TERTIARY: '#23232C',
  TEXT: '#FFF',
};

export const GlobalStyles = createGlobalStyle`
* {
   box-sizing: border-box;
   margin:0px;
   padding: 0px;
}
body, button {
   margin: 0;
   padding: 0;
   font-family: sans-serif !important;
   background-color: ${({ theme }) => theme.TERTIARY};
   color:${({ theme }) => theme.TEXT};
   font-weight: 400;
   font-style: normal;
   transition: all 0.50s linear;
}

body{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
input, textarea, button {font-family: 'inherit'}
`;
