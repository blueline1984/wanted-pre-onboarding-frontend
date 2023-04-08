import { useState, useEffect } from "react";
import Form from "../components/Form/Form";
import { validateEmail, validatePassword } from "../helper/checkValidation";

const SignUpPage = () => {
  const [signUpInput, setSignUpInput] = useState({ email: "", password: "" });
  const [isValid, setIsValid] = useState(false);

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

  useEffect(() => {
    if (
      validateEmail(signUpInput.email) &&
      validatePassword(signUpInput.password)
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [signUpInput]);

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
        isValid={isValid}
      />
    </>
  );
};

export default SignUpPage;
