import * as S from "./TodoInput.styled";
import Button from "../Button/Button";

const TodoInput = ({ onChange, todoValue, buttonType }) => {
  return (
    <>
      <S.Input
        data-testid="new-todo-input"
        onChange={onChange}
        value={todoValue}
      />
      <Button
        buttonDataTestId="new-todo-add-button"
        buttonText="add"
        buttonType={buttonType}
      />
    </>
  );
};

export default TodoInput;
