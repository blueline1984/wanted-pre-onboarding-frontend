import { Routes, Route, Navigate } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import TodoPage from "./pages/Todo";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";
import { isSignedIn } from "./helper/isSignedIn";

const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/signin"
          element={
            <PublicRoute isSignedIn={isSignedIn} component={<SignInPage />} />
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute isSignedIn={isSignedIn} component={<SignUpPage />} />
          }
        />
        <Route
          path="/todo"
          element={
            <PrivateRoute isSignedIn={isSignedIn} component={<TodoPage />} />
          }
        />
        <Route path="*" element={<Navigate replace to="/todo" />} />
      </Routes>
    </>
  );
};

export default App;
