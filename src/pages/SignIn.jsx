import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";
import { validateEmail, validatePassword } from "../helper/checkValidation";
import { baseInstance } from "../api/utils/instance";

const SignInPage = () => {
  const [signInInput, setSignInInput] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmitSignIn = async (e) => {
    e.preventDefault();

    try {
      const response = await baseInstance.post("auth/signin", {
        email: signInInput.email,
        password: signInInput.password,
      });
      localStorage.setItem("token", response.data.access_token);

      navigate("/todo");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeInput = (e) => {
    const { value, id } = e.target;

    setSignInInput({
      ...signInInput,
      [id]: value,
    });
  };

  return (
    <>
      <h1>This is Signin Page</h1>
      <Form
        onSubmit={handleSubmitSignIn}
        emailValue={signInInput.email}
        passswordValue={signInInput.password}
        onInputChange={handleChangeInput}
        buttonText="Sign In"
        buttonDataTestId="signin-button"
        buttonType="submit"
        isEnabled={
          validateEmail(signInInput.email) &&
          validatePassword(signInInput.password)
        }
      />
    </>
  );
};

export default SignInPage;
