import * as S from "./TodoList.styled";
import Button from "../Button/Button";

const TodoList = ({
  todoData,
  modifyMode,
  setModifyMode,
  onCheck,
  onSubmit,
  onInputChange,
}) => {
  const handleClickModifyMode = (position) => {
    const updatedModifiedState = modifyMode.map((item, index) =>
      index === position ? !item : item
    );
    setModifyMode(updatedModifiedState);
  };

  return (
    <>
      {todoData.map((todoItem, index) => {
        return (
          <li key={todoItem.id}>
            <S.Label>
              <S.Input
                type="checkbox"
                id={todoItem.id}
                onChange={onCheck}
                checked={todoItem.isCompleted}
              />
              {modifyMode[index] ? (
                <S.Input
                  placeholder="수정되는 인풋"
                  onChange={onInputChange}
                  id={todoItem.id}
                  value={todoItem.todo}
                />
              ) : (
                <S.Span>{todoItem.todo}</S.Span>
              )}
            </S.Label>
            {modifyMode[index] ? (
              <>
                <Button
                  onButtonClick={() => {
                    console.log("submit");
                  }}
                  buttonDataTestId="submit-button"
                  buttonText="Submit"
                  buttonType="submit"
                />
                <Button
                  onButtonClick={() => handleClickModifyMode(index)}
                  buttonDataTestId="cancel-button"
                  buttonText="Cancel"
                />
              </>
            ) : (
              <>
                <Button
                  onButtonClick={() => handleClickModifyMode(index)}
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
              </>
            )}
          </li>
        );
      })}
    </>
  );
};

export default TodoList;
