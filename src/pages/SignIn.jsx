import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";
import { validateEmail, validatePassword } from "../helper/checkValidation";
import { baseInstance } from "../api/utils/instance";

const SignInPage = () => {
  const [signInInput, setSignInInput] = useState({ email: "", password: "" });
  const [isValid, setIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmitSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await baseInstance.post("auth/signin", {
        email: signInInput.email,
        password: signInInput.password,
      });

      localStorage.setItem("token", response.data.access_token);

      setMessage("Successfully Signed In!");
      setIsLoading(false);
      navigate("/todo");
    } catch (error) {
      setMessage(error);
    }
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

  // useEffect(() => {
  //   if (localStorage.getItem("token")) {
  //     navigate("/todo");
  //   }
  // }, []);

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
