import { useState, useEffect } from "react";
import TodoInput from "../components/TodoInput/TodoInput";
import TodoList from "../components/TodoList/TodoList";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../api/utils/index";

const TodoPage = () => {
  const [todoData, setTodoData] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [modifyMode, setModifyMode] = useState({});

  const handleSubmitAddTodo = async (e) => {
    const body = { todo: newTodo };
    const data = await createTodo(e, body);
    setTodoData([...todoData, data]);
    setNewTodo("");
  };

  const handleSubmitUpdateTodo = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    const data = await updateTodo(e, todoData);

    const updatedTodos = todoData.map((todoItem) => {
      if (todoItem.id === data.id) {
        return { ...todoItem, data };
      }
      return todoItem;
    });

    setTodoData(updatedTodos);
    handleClickModifyMode(e.target.id, "");
  };

  const handleSubmitDeleteTodo = async (e) => {
    await deleteTodo(e);

    const data = await getTodos();
    setTodoData(data);
  };

  const handleChangeAddInput = (e) => {
    setNewTodo(e.target.value);
  };

  const handleClickToggleCheck = async (e) => {
    const updatedTodos = todoData.map((todoItem) => {
      if (todoItem.id === +e.target.id) {
        return {
          ...todoItem,
          isCompleted: !todoItem.isCompleted,
        };
      } else {
        return todoItem;
      }
    });

    await updateTodo(e, updatedTodos);

    setTodoData(updatedTodos);
  };

  const handleChangeUpdateInput = (e) => {
    const target = todoData.map((todoItem) => {
      if (todoItem.id === +e.target.id) {
        return {
          ...todoItem,
          todo: e.target.value,
        };
      }
      return todoItem;
    });

    setTodoData(target);
  };

  const handleClickModifyMode = (id, value) => {
    setModifyMode((prevState) => ({
      ...prevState,
      [id]: prevState[id] === value ? "" : value,
    }));
  };

  useEffect(() => {
    const fetchTodos = async () => {
      const data = await getTodos();
      setTodoData(data);
    };

    fetchTodos();
  }, []);

  return (
    <>
      <h1>This is Todo Page</h1>
      <form onSubmit={handleSubmitAddTodo}>
        <TodoInput
          onChange={handleChangeAddInput}
          value={newTodo}
          buttonType="submit"
        />
      </form>
      <TodoList
        todoData={todoData}
        modifyMode={modifyMode}
        onCheck={handleClickToggleCheck}
        onInputChange={handleChangeUpdateInput}
        onClickModifyMode={handleClickModifyMode}
        onSubmitUpdate={handleSubmitUpdateTodo}
        onSubmitDelete={handleSubmitDeleteTodo}
      />
    </>
  );
};

export default TodoPage;
