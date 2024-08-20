import React, { useState, useCallback } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UsernameInput from "./UsernameInput";
import PasswordInput from "./PasswordInput";
import { login } from "../../services/authService";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const response = await login(username, password);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("username", username);

        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "Welcome back!",
          background: "#d4edda",
          color: "#155724",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Proceed",
        }).then(() => {
          navigate("/todos");
        });
      } catch (error: any) {
        console.error("Login error", error);
        Swal.fire({
          icon: "error",
          title: "Authentication Failed",
          text: error.response?.data.message || "Enter correct credentials!!",
          background: "#f8d7da",
          color: "#721c24",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Try Again",
        });
      }
    },
    [username, password, navigate]
  );

  return (
    <Form onSubmit={handleLogin}>
      <UsernameInput username={username} setUsername={setUsername} />
      <PasswordInput password={password} setPassword={setPassword} />
      <Button variant="primary" type="submit" className="w-100 mb-2">
        Login
      </Button>
      <Button
        variant="secondary"
        type="button"
        onClick={() => navigate("/register")}
        className="w-100"
      >
        Register
      </Button>
    </Form>
  );
};

export default LoginForm;
