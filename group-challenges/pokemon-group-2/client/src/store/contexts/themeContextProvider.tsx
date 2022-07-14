import { useState } from "react";
import ThemeContext from "./themeContext";

type ThemeProps = {
  children: React.ReactNode;
};

const ThemeContextProvider: React.FC<ThemeProps> = ({ children }: any) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const themeSwitchHandler = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, themeSwitchHandler }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
