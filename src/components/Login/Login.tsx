import React from "react";
import { Container } from "react-bootstrap";
import LoginForm from "./LoginForm";
import styles from "../../styles/login.module.css";

const Login: React.FC = () => {
  return (
    <Container
      className={`d-flex flex-column justify-content-center align-items-center ${styles.loginContainer}`}
    >
      <h2 className="mb-4">Login</h2>
      <LoginForm />
    </Container>
  );
};

export default Login;
