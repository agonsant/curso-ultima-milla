import { SetStateAction, useState } from "react";
import ThemeContext from "./themeContext";

type ThemeProps = {
  children: React.ReactNode;
};

const ThemeContextProvider = ({ children }: ThemeProps): JSX.Element => {
  const [currentTheme, setCurrentTheme] = useState(
    window.localStorage.getItem("theme") === null
      ? "light"
      : window.localStorage.getItem("theme")
  );

  const themeSwitchHandler = (themeType: SetStateAction<string | null>) => {
    setCurrentTheme(themeType);
  };

  return (
    <ThemeContext.Provider
      value={{
        currentTheme: currentTheme,
        themeSwitchHandler: themeSwitchHandler,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
