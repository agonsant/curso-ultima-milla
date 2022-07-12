import { createContext } from "react";

interface IThemeContext {
  currentTheme: string | null;
  themeSwitchHandler: (currentTheme: string) => void;
}

const ThemeContext = createContext<IThemeContext | null>({
  currentTheme: "",
  themeSwitchHandler: () => {},
});

ThemeContext.displayName = "Theme Switcher Context";

export default ThemeContext;
