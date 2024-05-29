import useAuth from "../Hooks/UseAuth/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Pages/Loading";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

export default PrivateRoute;
