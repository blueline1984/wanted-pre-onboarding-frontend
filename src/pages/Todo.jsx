import { useState, useEffect } from "react";
import TodoInput from "../components/TodoInput/TodoInput";
import TodoList from "../components/TodoList/TodoList";
// import TodoListTest from "../components/TodoList/TodoListTest";
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
  };

  const handleSubmitUpdateTodo = async (e, position) => {
    const body = { todo: newTodo };
    console.log("body", body);
    const data = await updateTodo(e, body);

    setTodoData([...todoData, data]);

    // handleClickModifyMode(position);
  };

  const handleClickDeleteTodo = async (e) => {
    await deleteTodo(e);

    const data = await getTodos();
    setTodoData(data);
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

  // const handleClickModifyMode = (position) => {
  //   const updatedModifiedState = modifyMode.map((item, index) =>
  //     index === position ? !item : item
  //   );
  //   setModifyMode(updatedModifiedState);
  // };

  // const handleClickModifyMode = (e) => {
  //   const { value } = e.target;

  //   if (modifyMode.includes(value)) {
  //     setModifyMode(modifyMode.filter((item) => item !== value));
  //   } else {
  //     setModifyMode([...modifyMode, value]);
  //   }
  // };

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

  useEffect(() => {
    setModifyMode(new Array(todoData.length).fill(false));
  }, [todoData]);

  return (
    <>
      {/* <TodoListTest todoData={todoData} /> */}
      <h1>This is Todo Page</h1>
      <form onSubmit={handleSubmitAddTodo}>
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
        onSubmit={handleSubmitUpdateTodo}
        onInputChange={handleChangeNewInput}
        onClickModifyMode={handleClickModifyMode}
        onClickDelete={handleClickDeleteTodo}
      />
    </>
  );
};

export default TodoPage;
