import { NavLink } from "react-router-dom";

const NotFoundPage = ()=> {
  return (
    <>
    <h2>Page not found</h2>
    <p>Please go back to the home page</p>
    <NavLink to="/">
      Home
    </NavLink>
    </>
)
}
export default NotFoundPage;