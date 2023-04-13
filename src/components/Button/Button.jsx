import * as S from "./Button.styled";

const Button = ({
  onButtonClick,
  buttonDataTestId,
  buttonText,
  buttonType,
  isEnabled = true,
  children,
}) => {
  return (
    <S.Button
      type={buttonType}
      onClick={onButtonClick}
      data-testid={buttonDataTestId}
      disabled={!isEnabled}
    >
      {buttonText}
    </S.Button>
  );
};

export default Button;
