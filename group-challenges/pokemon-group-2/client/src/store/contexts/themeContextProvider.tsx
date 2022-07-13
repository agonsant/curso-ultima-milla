import { useState } from "react";
import ThemeContext from "./themeContext";

type ThemeProps = {
  children: React.ReactNode;
};

const ThemeContextProvider = ({ children }: ThemeProps) => {
  const [isDarkMode, setisDarkMode] = useState(true);

  const themeSwitchHandler = () => {
    setisDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, themeSwitchHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
