import { NavLink } from "react-router-dom";
import "./NotFoundPage.scss";

const NotFoundPage = () => {
  return (
    <>
      <div className="not-found-page">
        <h2>Page not found</h2>
        <p>Please go back</p>
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
      </div>
    </>
  );
};
export default NotFoundPage;
