import axios from "axios";

export const getTodos = () => {
  return axios.get("/api/todos").then((res) => res.data);
};

export const postTodo = async (todo) => {
  return await axios.post("/api/todo", { todo }).then((res) => res.data);
};
