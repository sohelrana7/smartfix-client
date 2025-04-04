import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../providers/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) return <LoadingSpinner></LoadingSpinner>;
  if (user) return children;
  return <Navigate to="/login" state={location.pathname} />;
};

export default PrivateRoute;
