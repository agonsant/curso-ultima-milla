import "styled-components";
import { ThemeType } from "../themes/mainTheme";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
