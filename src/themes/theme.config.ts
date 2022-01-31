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
body, button,input {
   margin: 0;
   padding: 0;
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
  font-family: 'Montserrat', sans-serif;
}
input, textarea, button {
  font-family: 'Montserrat', sans-serif;

}
`;
