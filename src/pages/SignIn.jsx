import { useState, useEffect } from "react";
import Form from "../components/Form/Form";
import { validateEmail, validatePassword } from "../helper/checkValidation";

const SignInPage = () => {
  const [signInInput, setSignInInput] = useState({ email: "", password: "" });
  const [isValid, setIsValid] = useState(false);

  const handleSubmitSignIn = (e) => {
    e.preventDefault();
  };

  const handleChangeInput = (e) => {
    const { value, id } = e.target;

    setSignInInput({
      ...signInInput,
      [id]: value,
    });
  };

  useEffect(() => {
    if (
      validateEmail(signInInput.email) &&
      validatePassword(signInInput.password)
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [signInInput]);

  return (
    <>
      <h1>This is Signin Page</h1>
      <Form
        onSubmit={handleSubmitSignIn}
        emailValue={signInInput.email}
        passswordValue={signInInput.password}
        onInputChange={handleChangeInput}
        onButtonClick={() => {
          console.log("signin");
        }}
        buttonText="Sign In"
        buttonDataTestId="signin-button"
        isValid={isValid}
        buttonType="submit"
      />
    </>
  );
};

export default SignInPage;
