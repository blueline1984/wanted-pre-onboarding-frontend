import * as S from "./Button.styled";

const Button = ({
  onButtonClick,
  buttonDataTestId,
  buttonText,
  isValid,
  buttonType,
}) => {
  return (
    <S.Button
      type={buttonType}
      onClick={onButtonClick}
      data-testid={buttonDataTestId}
      disabled={!isValid}
    >
      {buttonText}
    </S.Button>
  );
};

export default Button;
