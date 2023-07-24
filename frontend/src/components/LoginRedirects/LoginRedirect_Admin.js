// author: HARSH NARESHBHAI KATHIRIA

import { Navigate, Outlet, useLocation } from "react-router-dom";

const AdminLogin = () => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("userData"));
  const token = localStorage.getItem("authToken");
  const isAuthenticated = token != null && user.role == "admin";

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default AdminLogin;