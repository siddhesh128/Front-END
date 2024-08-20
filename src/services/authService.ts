import axios from "axios";

export const login = async (username: string, password: string) => {
  return await axios.post("http://localhost:5000/login", { username, password });
};
export const register = async (username: string, password: string) => {
  return await axios.post("http://localhost:5000/register", { username, password });
};