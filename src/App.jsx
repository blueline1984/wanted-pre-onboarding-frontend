import { Routes, Route, Navigate } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import TodoPage from "./pages/Todo";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="*" element={<Navigate replace to="/signin" />} />
      </Routes>
    </>
  );
};

export default App;
