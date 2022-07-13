import { useState } from "react";
import "./Header.scss";
export default function Header() {
  const [isNightModeOn,setIsNightModeOn]=useState(true);
  const toggleThemeMode = ()=> {
    setIsNightModeOn(!isNightModeOn);
  }
  return (
    <div className="header-main-container">
      <h1 className="header-title">Pokemon Arena Battle</h1>
      <button className="header-theme-button" onClick={toggleThemeMode}>
      {!isNightModeOn && (
        <img 
        className="header-theme-toggler"
        src="moon.png" 
        alt="Dark mode icon">
       </img>
      )}
      {isNightModeOn && (
        <img 
        className="header-theme-toggler"
        src="sun.png" 
        alt="Light mode icon">
       </img>
      )}
      </button>
      
    </div>
  );
}
