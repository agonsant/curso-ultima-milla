import "./Header.scss";
export default function Header() {
  return (
    <div className="header-main-container">
      <h1 className="header-title">Pokemon Arena Battle</h1>
      <img 
        className="header-theme-toggler"
        src="moon.png" 
        alt="Dark mode icon">
       </img>
       <img 
        className="header-theme-toggler"
        src="sun.png" 
        alt="Light mode icon">
       </img>
    </div>
  );
}
