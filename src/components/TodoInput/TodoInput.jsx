import * as S from "./TodoInput.styled";
import Button from "../Button/Button";

const TodoInput = ({ onChange, value, buttonType }) => {
  return (
    <>
      <S.Input data-testid="new-todo-input" onChange={onChange} value={value} />
      <Button
        buttonDataTestId="new-todo-add-button"
        buttonText="Add"
        buttonType={buttonType}
      />
    </>
  );
};

export default TodoInput;
