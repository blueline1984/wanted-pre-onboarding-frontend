import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";
import { validateEmail, validatePassword } from "../helper/checkValidation";
import { baseInstance } from "../api/utils/instance";

const SignUpPage = () => {
  const [signUpInput, setSignUpInput] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmitSignUp = async (e) => {
    e.preventDefault();
    try {
      await baseInstance.post("auth/signup", {
        email: signUpInput.email,
        password: signUpInput.password,
      });
      navigate("/signin");
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeInput = (e) => {
    const { value, id } = e.target;

    setSignUpInput({
      ...signUpInput,
      [id]: value,
    });
  };

  return (
    <>
      <h1>This is Signup Page</h1>
      <Form
        onSubmit={handleSubmitSignUp}
        emailValue={signUpInput.email}
        passswordValue={signUpInput.password}
        onInputChange={handleChangeInput}
        buttonText="Sign Up"
        buttonDataTestId="signup-button"
        buttonType="submit"
        isEnabled={
          validateEmail(signUpInput.email) &&
          validatePassword(signUpInput.password)
        }
      />
    </>
  );
};

export default SignUpPage;
