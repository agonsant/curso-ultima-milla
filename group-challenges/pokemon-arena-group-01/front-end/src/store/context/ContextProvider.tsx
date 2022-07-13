import { useState } from "react";
import {ThemeContext} from "./ThemeContext";

const ContextProvider = ({children}:any)=>{
  const [isNightModeOn, setIsNightModeOn] = useState(true);
  const toggleThemeMode = ()=> {
    setIsNightModeOn(!isNightModeOn);
  }
return (
  <ThemeContext.Provider value={{isNightModeOn, toggleThemeMode}}>
    {children}
  </ThemeContext.Provider>
);
};

export default ContextProvider;