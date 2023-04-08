import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";
import { validateEmail, validatePassword } from "../helper/checkValidation";
import { baseInstance } from "../api/utils/instance";

const SignUpPage = () => {
  const [signUpInput, setSignUpInput] = useState({ email: "", password: "" });
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmitSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await baseInstance.post("auth/signup", {
        email: signUpInput.email,
        password: signUpInput.password,
      });

      setMessage("Successfully Signed Up!");
      setIsLoading(false);

      //redirection
      navigate("/signin");
    } catch (error) {
      setMessage(error);
    }
  };

  const handleChangeInput = (e) => {
    const { value, id } = e.target;

    setSignUpInput({
      ...signUpInput,
      [id]: value,
    });
  };

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
        buttonText="Sign Up"
        buttonDataTestId="signup-button"
        isValid={isValid}
        buttonType="submit"
      />
    </>
  );
};

export default SignUpPage;
