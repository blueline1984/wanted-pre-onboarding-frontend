import { useState, useEffect } from "react";
import TodoInput from "../components/TodoInput/TodoInput";
import TodoList from "../components/TodoList/TodoList";
import { authInstance } from "../api/utils/instance";

const TodoPage = () => {
  const [todoData, setTodoData] = useState([]);
  const [modifyMode, setModifyMode] = useState([]);

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

  const handleClickToggleCheck = async (e) => {
    e.preventDefault();

    const target = todoData.map((todoItem) => {
      if (todoItem.id === +e.target.id) {
        return {
          ...todoItem,
          isCompleted: !todoItem.isCompleted,
        };
      }
      return todoItem;
    });

    setTodoData(target);
  };

  const handleChangeNewInput = (e) => {
    const target = todoData.map((todoItem) => {
      if (todoItem.id === +e.target.id) {
        return {
          ...todoItem,
          todo: e.target.value,
        };
      }
      return todoItem;
    });

    console.log(target);

    // setTodo(target)
  };

  const handleClickUpdateTodo = async (e) => {
    const target = todoData.filter((todoItem) => todoItem.id === +e.target.id);
    console.log(target);
    const body = {
      todo: "",
      isCompleted: true,
    };
    const reponse = await authInstance.put(`todos/${e.target.id}`, {});
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await authInstance.get("todos");
        setTodoData(response.data);
        setModifyMode(new Array(response.data.length).fill(false));
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
      </form>
      <TodoList
        todoData={todoData}
        modifyMode={modifyMode}
        setModifyMode={setModifyMode}
        onCheck={handleClickToggleCheck}
        onSubmit={handleClickUpdateTodo}
        onInputChange={handleChangeNewInput}
      />
    </>
  );
};

export default TodoPage;
