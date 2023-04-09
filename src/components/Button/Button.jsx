import * as S from "./Button.styled";

const Button = ({
  onButtonClick,
  buttonDataTestId,
  buttonText,
  buttonType,
}) => {
  return (
    <S.Button
      type={buttonType}
      onClick={onButtonClick}
      data-testid={buttonDataTestId}
      disabled={false}
    >
      {buttonText}
    </S.Button>
  );
};

export default Button;
