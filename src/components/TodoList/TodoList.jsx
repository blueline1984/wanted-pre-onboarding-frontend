import * as S from "./TodoList.styled";
import Button from "../Button/Button";

const TodoList = ({
  todoData,
  modifyMode,
  onCheck,
  onSubmit,
  onInputChange,
  onClickModifyMode,
  onClickDelete,
}) => {
  return (
    <>
      {todoData.map((todoItem, index) => {
        return (
          <S.Wrap key={todoItem.id}>
            <S.Input
              type="checkbox"
              id={todoItem.id}
              onChange={onCheck}
              checked={todoItem.isCompleted}
            />
            {modifyMode[todoItem.id] === todoItem.id ? (
              <S.Label>
                <form onSubmit={(e) => onSubmit(e)} id={todoItem.id}>
                  <S.Input
                    id={todoItem.id}
                    onChange={onInputChange}
                    value={todoItem.todo}
                  />
                  <Button
                    buttonDataTestId="submit-button"
                    buttonText="Submit"
                    buttonType="submit"
                  />
                </form>
                <Button
                  onButtonClick={() =>
                    onClickModifyMode(todoItem.id, todoItem.id)
                  }
                  buttonDataTestId="cancel-button"
                  buttonText="Cancel"
                />
              </S.Label>
            ) : (
              <>
                <S.Span>{todoItem.todo}</S.Span>
                <Button
                  onButtonClick={() =>
                    onClickModifyMode(todoItem.id, todoItem.id)
                  }
                  buttonDataTestId="modify-button"
                  buttonText="Modify"
                />
                <form onSubmit={onClickDelete} id={todoItem.id}>
                  <Button
                    buttonDataTestId="delete-button"
                    buttonText="Delete"
                    buttonType="submit"
                  />
                </form>
              </>
            )}
          </S.Wrap>
        );
      })}
    </>
  );
};

export default TodoList;
