import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isSignedIn, component: Component }) => {
  return isSignedIn() ? Component : <Navigate to="/signin" />;
};

export default PrivateRoute;
