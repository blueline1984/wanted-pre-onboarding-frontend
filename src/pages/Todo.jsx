import { useState, useEffect } from "react";
import axios from "axios";
import TodoInput from "../components/TodoInput/TodoInput";
import TodoList from "../components/TodoList/TodoList";
import { authInstance } from "../api/utils/instance";
// import TodoListTest from "../components/TodoList/TodoListTest";

const TodoPage = () => {
  const [todoData, setTodoData] = useState([]);
  const [modifyMode, setModifyMode] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const getTodos = async () => {
    try {
      const response = await authInstance.get("todos");

      setTodoData(response.data);
      setModifyMode(new Array(response.data.length).fill(false));
    } catch (error) {
      console.log(error);
    }

    // const baseURL = "https://www.pre-onboarding-selection-task.shop/";
    // try {
    //   const response = await axios.get(`${baseURL}todos`, {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //   });
    //   setTodoData(response.data);
    //   setModifyMode(new Array(response.data.length).fill(false));
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const createTodo = async (e) => {
    e.preventDefault();
    // const baseURL = "https://www.pre-onboarding-selection-task.shop/";
    const body = {
      todo: newTodo,
    };

    // try {
    //   await axios.post(`${baseURL}todos`, body, {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
    try {
      await authInstance.post("todos", body);
    } catch (error) {
      console.log(error);
    }

    getTodos();
  };

  const updateTodo = async (e, position) => {
    e.preventDefault();

    // const baseURL = "https://www.pre-onboarding-selection-task.shop/";
    const target = todoData.filter((todoItem) => todoItem.id === +e.target.id);
    const body = {
      todo: target[0].todo,
      isCompleted: target[0].isCompleted,
    };

    // try {
    //   await axios.put(`${baseURL}todos/${e.target.id}`, body, {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //   });
    // } catch (error) {
    //   console.error(error);
    // }
    await authInstance.put(`todos/${e.target.id}`, body);

    handleClickModifyMode(position);
  };

  const deleteTodo = async (e) => {
    e.preventDefault();

    const baseURL = "https://www.pre-onboarding-selection-task.shop/";
    try {
      await axios.delete(`${baseURL}todos/${e.target.id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
    // await authInstance.delete(`todos/${e.target.id}`);

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
      {/* <TodoListTest todoData={todoData} /> */}
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
