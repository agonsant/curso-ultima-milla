import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../store/context/ThemeContext";

const NotFoundPage = ()=> {
  const {isNightModeOn} = useContext(ThemeContext);
  return (
    <>
    <div className={`"not-found-page" ${isNightModeOn ? "background-night text-night" : "background-light text-light"}`}>
    <h2>Page not found</h2>
    <p>Please go back to the home page</p>
    <NavLink to="/">
      Home
    </NavLink>
    </div>
    </>
)
}
export default NotFoundPage;