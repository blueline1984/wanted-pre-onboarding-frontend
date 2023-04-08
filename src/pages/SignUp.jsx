import Form from "../components/Form/Form";

const SignUpPage = () => {
  const handleSubmitSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1>This is Signup Page</h1>
      <Form
        onSubmit={handleSubmitSignUp}
        onButtonClick={() => {
          console.log("signup");
        }}
        buttonText="Sign Up"
        buttonDataTestId="signup-button"
      />
    </>
  );
};

export default SignUpPage;
