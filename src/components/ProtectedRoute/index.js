import React from "react";
import PropTypes from "prop-types";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ loggedIn }) {
  if (!loggedIn) {
    return <Navigate to={"/login"} replace />;
  }

  return <Outlet />;
}

ProtectedRoute.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

export default ProtectedRoute;
