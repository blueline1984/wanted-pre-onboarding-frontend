import { authInstance } from "../axios/instance";

const getTodos = async () => {
  try {
    const response = await authInstance.get("todos");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const createTodo = async (e, body) => {
  e.preventDefault();

  try {
    const response = await authInstance.post("todos", body);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const updateTodo = async (e, data) => {
  e.preventDefault();

  try {
    const target = data.filter((item) => item.id === +e.target.id);
    const body = {
      todo: target[0].todo,
      isCompleted: target[0].isCompleted,
    };
    const response = await authInstance.put(`todos/${e.target.id}`, body);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const deleteTodo = async (e) => {
  e.preventDefault();

  try {
    await authInstance.delete(`todos/${e.target.id}`);
  } catch (error) {
    console.error(error);
  }
};

export { getTodos, createTodo, updateTodo, deleteTodo };
