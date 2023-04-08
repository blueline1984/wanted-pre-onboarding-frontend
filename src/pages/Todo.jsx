import Button from "../components/Button/Button";
import TodoList from "../components/TodoList/TodoList";

const TodoPage = () => {
  const mockData = [
    {
      id: 1,
      todo: "과제하기",
      isCompleted: false,
      userId: 1,
    },
    {
      id: 2,
      todo: "코딩하기",
      isCompleted: true,
      userId: 1,
    },
    {
      id: 3,
      todo: "장보기",
      isCompleted: false,
      userId: 1,
    },
  ];

  return (
    <>
      <h1>This is Todo Page</h1>
      <input data-testid="new-todo-input" />
      <Button
        onButtonClick={() => {
          console.log("add todo");
        }}
        buttonDataTestId="new-todo-add-button"
        buttonText="add"
      />
      <TodoList todoList={mockData} />
    </>
  );
};

export default TodoPage;
