import { useState, useEffect } from "react";
import TodoInput from "../components/TodoInput/TodoInput";
import TodoList from "../components/TodoList/TodoList";
import { authInstance } from "../api/utils/instance";

const TodoPage = () => {
  const [todoData, setTodoData] = useState([]);
  const [modifyMode, setModifyMode] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const fetchTodoListData = async () => {
    try {
      const response = await authInstance.get("todos");
      setTodoData(response.data);
      setModifyMode(new Array(response.data.length).fill(false));
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeInput = (e) => {
    setNewTodo(e.target.value);
  };

  const handleClickAddTodo = async (e) => {
    e.preventDefault();

    const body = {
      todo: newTodo,
    };
    try {
      const response = await authInstance.post("todos", body);
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    fetchTodoListData();
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

  const handleClickUpdateTodo = async (e, position) => {
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

  const handleClickModifyMode = (position) => {
    const updatedModifiedState = modifyMode.map((item, index) =>
      index === position ? !item : item
    );
    setModifyMode(updatedModifiedState);
  };

  const handleClickDeleteTodo = async (e) => {
    e.preventDefault();

    console.log("e.target", e.target);

    const reponse = await authInstance.delete(`todos/${e.target.id}`);
    console.log(reponse);

    fetchTodoListData();
  };

  useEffect(() => {
    fetchTodoListData();
  }, []);

  return (
    <>
      <h1>This is Todo Page</h1>
      <form onSubmit={handleClickAddTodo}>
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
        onSubmit={handleClickUpdateTodo}
        onInputChange={handleChangeNewInput}
        onClickModifyMode={handleClickModifyMode}
        onClickDelete={handleClickDeleteTodo}
      />
    </>
  );
};

export default TodoPage;
