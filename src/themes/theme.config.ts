import { createGlobalStyle } from 'styled-components';

import { COLORS } from './colors';

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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;600&display=swap');
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
  overflow: hidden;
}
input, textarea, button {
  font-family: 'Montserrat', sans-serif;

}


::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}

::-webkit-scrollbar-track {
  background: ${COLORS.NEUTRAL};        /* color of the tracking area */
}

::-webkit-scrollbar-thumb {
  background-color: ${COLORS.SECONDARY};    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 3px solid  ${
    COLORS.NEUTRAL
  }; /* creates padding around scroll thumb */
}
`;
