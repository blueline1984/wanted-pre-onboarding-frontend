import { useState, useEffect } from "react";
import TodoInput from "../components/TodoInput/TodoInput";
import TodoList from "../components/TodoList/TodoList";
import { authInstance } from "../api/utils/instance";

const TodoPage = () => {
  const [todoData, setTodoData] = useState([]);

  const handleChangeInput = (e) => {
    setTodoData({
      ...todoData,
      todo: e.target.value,
    });
  };

  const handleClickAddTodo = async (e) => {
    e.preventDefault();
    try {
      const response = await authInstance.post("todos", {
        todo: todoData.todo,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await authInstance.get("todos");
        setTodoData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>This is Todo Page</h1>
      <form onSubmit={handleClickAddTodo}>
        <TodoInput
          onChange={handleChangeInput}
          todoValue={todoData.todo}
          buttonType="submit"
        />
        <TodoList todoData={todoData} />
      </form>
    </>
  );
};

export default TodoPage;
