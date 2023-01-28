import Styled, { BaseThemeProviderComponent } from "styled-components";
import { DefaultTheme } from "@/assets/styles/theme/default";

interface TypeTheme extends DefaultTheme {}
declare module "styled-components" {
  export interface DefaultTheme extends Styled {
    colors: {
      background: string;
      primary: {
        light: string;
        main: string;
        dark: string;
      };
      gray: {
        500: string;
        400: string;
        300: string;
        100: string;
      };
    };
  }
}
