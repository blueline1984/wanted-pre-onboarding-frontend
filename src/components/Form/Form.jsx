import * as S from "./Form.styled";
import Button from "../Button/Button";

const Form = ({
  onSubmit,
  onInputChange,
  emailValue,
  passwordValue,
  onButtonClick,
  buttonText,
  buttonDataTestId,
  isEnabled,
}) => {
  return (
    <S.Form onSubmit={onSubmit}>
      <S.Label htmlFor="email">Email</S.Label>
      <S.Input
        id="email"
        type="email"
        value={emailValue}
        onChange={onInputChange}
        data-testid="email-input"
      />
      <S.Label htmlFor="password">Password</S.Label>
      <S.Input
        id="password"
        type="password"
        value={passwordValue}
        onChange={onInputChange}
        data-testid="password-input"
      />
      <Button
        onButtonClick={onButtonClick}
        buttonText={buttonText}
        buttonDataTestId={buttonDataTestId}
        isEnabled={isEnabled}
      />
    </S.Form>
  );
};

export default Form;
