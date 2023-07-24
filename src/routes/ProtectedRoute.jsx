import {Outlet, Navigate} from "react-router";

const ProtectedRoutes = () => {
  let userRol = "user";
  // el navigate redirecciona instantaneamente, es el protector.
  return <div>{userRol !== "admin" ? <Navigate to={"/"} /> : <Outlet />}</div>;
};

export default ProtectedRoutes;
