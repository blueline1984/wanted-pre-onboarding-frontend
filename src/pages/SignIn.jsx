import Form from "../components/Form/Form";

const SignInPage = () => {
  const handleSubmitSignIn = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>This is Signin Page</h1>
      <Form
        onSubmit={handleSubmitSignIn}
        onButtonClick={() => {
          console.log("signin");
        }}
        buttonText="Sign In"
        dataTestId="signin-button"
      />
    </>
  );
};

export default SignInPage;
