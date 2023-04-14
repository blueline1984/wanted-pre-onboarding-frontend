import * as S from "./Button.styled";

const Button = ({
  onButtonClick,
  buttonDataTestId,
  buttonText,
  buttonType,
  isEnabled = true,
}) => {
  return (
    <S.Wrap>
      <S.Button
        type={buttonType}
        onClick={onButtonClick}
        data-testid={buttonDataTestId}
        disabled={!isEnabled}
      >
        {buttonText}
      </S.Button>
    </S.Wrap>
  );
};

export default Button;
