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
  onClickCancel,
}) => {
  return (
    <>
      {todoData.map((todoItem) => {
        return (
          <S.Li key={todoItem.id}>
            <S.Wrap>
              <S.Input
                type="checkbox"
                id={todoItem.id}
                onChange={onCheck}
                checked={todoItem.isCompleted}
                value={todoItem.todo}
              />
              {modifyMode[todoItem.id] === todoItem.id ? (
                <>
                  <form onSubmit={(e) => onSubmitUpdate(e)} id={todoItem.id}>
                    <S.Input
                      id={todoItem.id}
                      onChange={onInputChange}
                      value={todoItem.todo}
                      data-testid="modify-input"
                    />
                    <Button
                      buttonDataTestId="submit-button"
                      buttonText="제출"
                      buttonType="submit"
                    />
                  </form>
                  <Button
                    onButtonClick={() =>
                      onClickCancel(todoItem.id, todoItem.id)
                    }
                    buttonDataTestId="cancel-button"
                    buttonText="취소"
                  />
                </>
              ) : (
                <>
                  <S.Span>{todoItem.todo}</S.Span>
                  <Button
                    onButtonClick={() =>
                      onClickModifyMode(todoItem.id, todoItem.id)
                    }
                    buttonDataTestId="modify-button"
                    buttonText="수정"
                  />
                  <form onSubmit={onSubmitDelete} id={todoItem.id}>
                    <Button
                      buttonDataTestId="delete-button"
                      buttonText="삭제"
                      buttonType="submit"
                    />
                  </form>
                </>
              )}
            </S.Wrap>
          </S.Li>
        );
      })}
    </>
  );
};

export default TodoList;
