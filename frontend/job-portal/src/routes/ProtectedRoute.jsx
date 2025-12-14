import Reacrt from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = ({ requireRole }) => {
  console.log("Protected Route Requirement:", requireRole);
  return <Outlet />;
};

export default ProtectedRoutes;
