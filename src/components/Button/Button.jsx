import * as S from "./Button.styled";

const Button = ({ onButtonClick, buttonDataTestId, buttonText }) => {
  return (
    <S.Button
      type="submit"
      onClick={onButtonClick}
      data-testid={buttonDataTestId}
    >
      {buttonText}
    </S.Button>
  );
};

export default Button;
