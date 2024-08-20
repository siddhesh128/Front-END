import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import RegisterForm from "./RegisterForm";
import styles from "../../styles/register.module.css";

const Register: React.FC = () => {
  return (
    <Container
      className={`d-flex justify-content-center align-items-center ${styles.registerContainer}`}
    >
      <Row className="w-100">
        <Col md={6} className="mx-auto">
          <h1 className="text-center mb-4">Register</h1>
          <RegisterForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
