import * as S from "./Button.styled";

const Button = ({ onButtonClick, buttonDataTestId, buttonText, isValid }) => {
  return (
    <S.Button
      type="submit"
      onClick={onButtonClick}
      data-testid={buttonDataTestId}
      disabled={!isValid}
    >
      {buttonText}
    </S.Button>
  );
};

export default Button;
