import axios from "axios";

export const register = async (username: string, password: string) => {
  return await axios.post("https://todo-backend-zsif.onrender.com/register", { username, password });
};

export const login = async (username: string, password: string) => {
  return await axios.post("https://todo-backend-zsif.onrender.com/login", { username, password });
};
