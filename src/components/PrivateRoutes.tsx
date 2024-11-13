import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  // Replace this with your actual auth logic
  const isAuthenticated = localStorage.getItem("token") !== null;

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
