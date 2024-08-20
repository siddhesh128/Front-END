import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UsernameInput from "./UsernameInput";
import PasswordInput from "./PasswordInput";
import { register } from "../../services/authService";

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await register(username, password);
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "You can now log in!",
        background: "#d4edda",
        color: "#155724",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Login",
      }).then(() => {
        navigate("/login");
      });
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: err.response?.data.message || "An error occurred. Please try again.",
        background: "#f8d7da",
        color: "#721c24",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <Form>
      <UsernameInput username={username} setUsername={setUsername} />
      <PasswordInput password={password} setPassword={setPassword} />
      <Button
        className="mt-4 w-100"
        variant="primary"
        onClick={handleRegister}
      >
        Register
      </Button>
      <Button
        className="mt-3 w-100"
        variant="success"
        onClick={() => navigate("/login")}
      >
        Already have an account? Login
      </Button>
    </Form>
  );
};

export default RegisterForm;
