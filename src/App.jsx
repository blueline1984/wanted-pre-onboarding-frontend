import { Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignIn";
import SignUpPage from "./pages/SignUp";
import TodoPage from "./pages/Todo";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signin" element={<SignUpPage />} />
        <Route path="/signin" element={<TodoPage />} />
      </Routes>
      <div>App Page</div>
    </>
  );
};

export default App;
