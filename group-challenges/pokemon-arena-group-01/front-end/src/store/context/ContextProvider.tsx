import { useState } from "react";
import {ThemeContext} from "./ThemeContext";

const ContextProvider = ()=>{
  const [isNightModeOn, setIsNightModeOn] = useState(true);
  const toggleThemeMode = ()=> {
    setIsNightModeOn(!isNightModeOn);
  }
return (
  <ThemeContext.Provider value={{isNightModeOn:true, toggleThemeMode}}>
  </ThemeContext.Provider>
);
};

export default ContextProvider;