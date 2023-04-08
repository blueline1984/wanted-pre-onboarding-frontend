import * as S from "./TodoList.styled";
import Button from "../Button/Button";

const TodoList = ({ todoData, modifyMode, setModifyMode }) => {
  const handleClickModifyButton = () => {
    setModifyMode(true);
  };

  const handleClickCancelButton = () => {
    setModifyMode(false);
  };

  return (
    <>
      {todoData.map((todoItem) => {
        return (
          <li key={todoItem.id}>
            <S.Label>
              <S.Input type="checkbox" />
              {modifyMode ? <S.Input /> : <S.Span>{todoItem.todo}</S.Span>}
            </S.Label>
            {modifyMode ? (
              <>
                <Button
                  onButtonClick={() => {
                    console.log("submit");
                  }}
                  buttonDataTestId="submit-button"
                  buttonText="Submit"
                />
                <Button
                  onButtonClick={handleClickCancelButton}
                  buttonDataTestId="cancel-button"
                  buttonText="Cancel"
                />
              </>
            ) : (
              <>
                <Button
                  onButtonClick={handleClickModifyButton}
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
