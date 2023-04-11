import React from "react";

const TodoListTest = ({ todoData, modifyMode }) => {
  return (
    <>
      {todoData.map((todoItem, index) => {
        return (
          <li key={todoItem.id}>
            {modifyMode[index] ? (
              <>
                <label>
                  <input type="checkbox" checked={todoItem.isCompleted} />
                  <span>{todoItem.todo}</span>
                </label>
                <button>수정</button>
                <button>삭제</button>
              </>
            ) : (
              <>
                <label>
                  <input type="checkbox" checked={todoItem.isCompleted} />
                  <input />
                </label>
                <button>제출</button>
                <button>취소</button>
              </>
            )}
          </li>
        );
      })}
    </>
  );
};

export default TodoListTest;
