import * as S from "./TodoList.styled";
import Button from "../Button/Button";

const TodoList = ({ todoList }) => {
  return (
    <>
      {todoList.map((todoItem) => {
        return (
          <li key={todoItem.id}>
            <S.Label>
              <S.Input type="checkbox" />
              <S.Span>{todoItem.todo}</S.Span>
            </S.Label>
            <Button
              onButtonClick={() => {
                console.log("modify");
              }}
              buttonDataTestId="modify-button"
              buttonText="Modify"
            />
            <Button
              onButtonClick={() => {
                console.log("delete");
              }}
              buttonDataTestId="delete-button"
              buttonText="Delete"
            />
          </li>
        );
      })}
    </>
  );
};

export default TodoList;
