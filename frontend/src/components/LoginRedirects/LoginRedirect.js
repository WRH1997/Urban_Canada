// author: Muskan Vazirani

import { Navigate, Outlet, useLocation } from "react-router-dom";

const LoginRedirect = () => {
  const location = useLocation();
  const token = localStorage.getItem("authToken");
  const isAuthenticated = token != null;

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default LoginRedirect;