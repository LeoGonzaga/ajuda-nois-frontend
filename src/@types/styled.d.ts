// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    PRIMARY: string;
    SECONDARY: string;
    TERTIARY: string;
    QUATERNARY: string;
    SUCCESS: string;
    WARNING: string;
    ERROR: string;
    PINK: string;
    NEUTRAL: string;
    WHITE: string;
    BLACK: string;
    TEXT: string;
    BUTTON: string;
    BLUE: string;
  }
}
