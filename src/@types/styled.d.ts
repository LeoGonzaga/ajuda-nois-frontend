// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    PRIMARY: string;
    SECONDARY: string;
    TERTIARY: string;
    TEXT: string;
    NEUTRAL: string;
  }
}
