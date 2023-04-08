import * as S from "./TodoInput.styled";
import Button from "../Button/Button";

const TodoInput = ({ onButtonClick, onChange }) => {
  return (
    <>
      <S.Input data-testid="new-todo-input" onChange={onChange} />
      <Button
        onButtonClick={onButtonClick}
        buttonDataTestId="new-todo-add-button"
        buttonText="add"
      />
    </>
  );
};

export default TodoInput;
