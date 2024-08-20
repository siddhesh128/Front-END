import axios from "axios";
import { Todo } from "../types";

const apiBase = "https://todo-backend-zsif.onrender.com/todos";

export const fetchTodos = async (token: string | null) => {
  return await axios.get<Todo[]>(apiBase, {
    headers: { Authorization: token || "" },
  });
};

export const addTodo = async (task: string, token: string | null) => {
  return await axios.post<Todo>(
    apiBase,
    { task },
    { headers: { Authorization: token || "" } }
  );
};

export const deleteTodo = async (id: number, token: string | null) => {
  return await axios.delete(`${apiBase}/${id}`, {
    headers: { Authorization: token || "" },
  });
};

export const updateTodo = async (
  id: number,
  task: string,
  token: string | null
) => {
  return await axios.put<Todo>(
    `${apiBase}/${id}`,
    { task },
    { headers: { Authorization: token || "" } }
  );
};

export const toggleCompleted = async (id: number, token: string | null) => {
  return await axios.put(
    `${apiBase}/toggle/${id}`,
    {},
    { headers: { Authorization: token || "" } }
  );
};
