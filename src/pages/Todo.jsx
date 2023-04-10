import { useState, useEffect } from "react";
import axios from "axios";
import TodoInput from "../components/TodoInput/TodoInput";
import TodoList from "../components/TodoList/TodoList";
import { authInstance } from "../api/utils/instance";

const TodoPage = () => {
  const [todoData, setTodoData] = useState([]);
  const [modifyMode, setModifyMode] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const getTodos = async () => {
    const baseURL = "https://www.pre-onboarding-selection-task.shop/";
    try {
      const response = await axios.get(`${baseURL}todos`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setTodoData(response.data);
      setModifyMode(new Array(response.data.length).fill(false));
    } catch (error) {
      console.log(error);
    }
  };

  const createTodo = async (e) => {
    e.preventDefault();

    const body = {
      todo: newTodo,
    };
    try {
      await authInstance.post("todos", body);
    } catch (error) {
      console.log(error);
    }

    getTodos();
  };

  const updateTodo = async (e, position) => {
    e.preventDefault();

    const target = todoData.filter((todoItem) => todoItem.id === +e.target.id);
    const body = {
      todo: target[0].todo,
      isCompleted: target[0].isCompleted,
    };
    const reponse = await authInstance.put(`todos/${e.target.id}`, body);
    console.log("update", reponse);

    handleClickModifyMode(position);
  };

  const deleteTodo = async (e) => {
    e.preventDefault();

    await authInstance.delete(`todos/${e.target.id}`);

    getTodos();
  };

  const handleChangeInput = (e) => {
    setNewTodo(e.target.value);
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

    setTodoData(target);
  };

  const handleClickModifyMode = (position) => {
    const updatedModifiedState = modifyMode.map((item, index) =>
      index === position ? !item : item
    );
    setModifyMode(updatedModifiedState);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <h1>This is Todo Page</h1>
      <form onSubmit={createTodo}>
        <TodoInput
          onChange={handleChangeInput}
          value={newTodo}
          buttonType="submit"
        />
      </form>
      <TodoList
        todoData={todoData}
        modifyMode={modifyMode}
        setModifyMode={setModifyMode}
        onCheck={handleClickToggleCheck}
        onSubmit={updateTodo}
        onInputChange={handleChangeNewInput}
        onClickModifyMode={handleClickModifyMode}
        onClickDelete={deleteTodo}
      />
    </>
  );
};

export default TodoPage;
