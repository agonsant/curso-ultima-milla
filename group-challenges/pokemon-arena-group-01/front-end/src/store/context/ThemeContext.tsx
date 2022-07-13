import  React  from "react";

interface IThemeContext {
isNightModeOn:boolean;
toggleThemeMode:()=>void;
};

export const ThemeContext = React.createContext<IThemeContext>({isNightModeOn:true,toggleThemeMode:()=>{}});
