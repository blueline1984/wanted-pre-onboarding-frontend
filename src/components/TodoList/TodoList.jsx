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
          <li key={todoItem.id}>
            {modifyMode[index] ? (
              <S.Label>
                <S.Input
                  type="checkbox"
                  id={todoItem.id}
                  onChange={onCheck}
                  checked={todoItem.isCompleted}
                />
                <form onSubmit={(e) => onSubmit(e, index)} id={todoItem.id}>
                  <S.Input
                    placeholder="수정되는 인풋"
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
                  onButtonClick={() => onClickModifyMode(index)}
                  buttonDataTestId="cancel-button"
                  buttonText="Cancel"
                />
              </S.Label>
            ) : (
              <>
                <S.Span>{todoItem.todo}</S.Span>
                <Button
                  onButtonClick={() => onClickModifyMode(index)}
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
          </li>
        );
      })}
    </>
  );
};

export default TodoList;
