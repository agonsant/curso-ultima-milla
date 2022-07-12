import { NavLink } from "react-router-dom";

const NotFoundPage = ()=> {
  return (
    <>
    <h1>Page not found</h1>
    <p>Please go back to the home page</p>
    <NavLink to="/">
      Home
    </NavLink>
    </>
)
}
export default NotFoundPage;