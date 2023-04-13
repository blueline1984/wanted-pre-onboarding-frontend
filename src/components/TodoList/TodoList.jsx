import * as S from "./TodoList.styled";
import Button from "../Button/Button";

const TodoList = ({
  todoData,
  modifyMode,
  onCheck,
  onSubmitUpdate,
  onInputChange,
  onClickModifyMode,
  onSubmitDelete,
}) => {
  return (
    <>
      {todoData.map((todoItem) => {
        return (
          <S.Li key={todoItem.id}>
            <S.Input
              type="checkbox"
              id={todoItem.id}
              onChange={onCheck}
              checked={todoItem.isCompleted}
              value={todoItem.todo}
            />
            <S.Label>
              {modifyMode[todoItem.id] === todoItem.id ? (
                <>
                  <form onSubmit={(e) => onSubmitUpdate(e)} id={todoItem.id}>
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
                    <Button
                      onButtonClick={() =>
                        onClickModifyMode(todoItem.id, todoItem.id)
                      }
                      buttonDataTestId="cancel-button"
                      buttonText="Cancel"
                    />
                  </form>
                </>
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
                  <form onSubmit={onSubmitDelete} id={todoItem.id}>
                    <Button
                      buttonDataTestId="delete-button"
                      buttonText="Delete"
                      buttonType="submit"
                    />
                  </form>
                </>
              )}
            </S.Label>
          </S.Li>
        );
      })}
    </>
  );
};

export default TodoList;
