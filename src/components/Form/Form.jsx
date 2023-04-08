import * as S from "./Form.styled";
import Button from "../Button/Button";

const Form = ({ onSubmit, onButtonClick, buttonText, buttonDataTestId }) => {
  return (
    <S.Form onSubmit={onSubmit}>
      <S.Label htmlFor="email">Email</S.Label>
      <S.Input id="email" type="email" />
      <S.Label htmlFor="password">Password</S.Label>
      <S.Input id="password" type="password" />
      <Button
        onButtonClick={onButtonClick}
        buttonText={buttonText}
        buttonDataTestId={buttonDataTestId}
      />
    </S.Form>
  );
};

export default Form;
