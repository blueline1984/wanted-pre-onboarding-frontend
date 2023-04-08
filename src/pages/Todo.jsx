import Button from "../components/Button/Button";
import TodoInput from "../components/TodoInput/TodoInput";
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

  const handleInput = () => {};

  const handleClickAddButton = () => {
    console.log("add todo");
  };

  return (
    <>
      <h1>This is Todo Page</h1>
      <TodoInput onChange={handleInput} onButtonClick={handleClickAddButton} />
      <TodoList todoList={mockData} />
    </>
  );
};

export default TodoPage;
