import { useState } from "react";
import Form from "../components/Form/Form";

const SignUpPage = () => {
  const [signUpInput, setSignUpInput] = useState({ email: "", password: "" });

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
  };

  const handleChangeInput = (e) => {
    const { value, id } = e.target;
    setSignUpInput({
      ...signUpInput,
      [id]: value,
    });
  };

  const handleClickSignUp = () => {};

  return (
    <>
      <h1>This is Signup Page</h1>
      <Form
        onSubmit={handleSubmitSignUp}
        emailValue={signUpInput.email}
        passswordValue={signUpInput.password}
        onInputChange={handleChangeInput}
        onButtonClick={handleClickSignUp}
        buttonText="Sign Up"
        buttonDataTestId="signup-button"
      />
    </>
  );
};

export default SignUpPage;
