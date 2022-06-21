import { createGlobalStyle } from 'styled-components';

import { COLORS } from './colors';

export const lightTheme = {
  PRIMARY: '#827AFD',
  SECONDARY: '#00BF20',
  TERTIARY: '#23232C',
  QUATERNARY: '#FFC13A',
  SUCCESS: '#00c86f',
  WARNING: '#ff8c2a',
  ERROR: '#FF4C61',
  PINK: '#dc6ebe',
  NEUTRAL: '#2D2D35',
  WHITE: '#FFF',
  BLACK: '#CED4DA',
  TEXT: '#B4B4B4',
  BUTTON: '#2D3748',
  BLUE: '#6bd1ff',
};

export const darkTheme = {
  PRIMARY: '#827AFD',
  SECONDARY: '#00BF20',
  TERTIARY: '#23232C',
  QUATERNARY: '#FFC13A',
  SUCCESS: '#00c86f',
  WARNING: '#ff8c2a',
  ERROR: '#FF4C61',
  PINK: '#dc6ebe',
  BLUE: '#6bd1ff',
  NEUTRAL: '#2D2D35',
  WHITE: '#FFF',
  BLACK: '#CED4DA',
  TEXT: '#fff',
  BUTTON: '#2D3748',
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
  overflow: hidden;
}
input, textarea, button {
  font-family: 'Montserrat', sans-serif;

}

.modalOverlay {
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;

  background: rgba(0, 0, 0, 0.7);
}

.modalContent {
  width: 100%;
  max-width: 550px;

  border: none;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.TERTIARY};
}

.ReactModal__Overlay {
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.ReactModal__Overlay--after-open {
  opacity: 1;
}

.ReactModal__Overlay--before-close {
  opacity: 0;
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
