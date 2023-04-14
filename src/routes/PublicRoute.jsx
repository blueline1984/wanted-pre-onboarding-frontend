import { Navigate } from "react-router-dom";

const PublicRoute = ({ isSignedIn, component: Component }) => {
  return isSignedIn() ? <Navigate to="/todo" /> : Component;
};

export default PublicRoute;
