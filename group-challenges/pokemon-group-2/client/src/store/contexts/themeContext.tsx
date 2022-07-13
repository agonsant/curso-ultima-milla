import { createContext } from "react";

interface IThemeContext {
  isDarkMode: boolean;
  themeSwitchHandler: (isDarkMode: boolean) => void;
}

const ThemeContext = createContext<IThemeContext | null>({
  isDarkMode: false,
  themeSwitchHandler: () => {},
});

ThemeContext.displayName = "Theme Switcher Context";

export default ThemeContext;
