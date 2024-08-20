import React from "react";
import { Form } from "react-bootstrap";

interface UsernameInputProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

const UsernameInput: React.FC<UsernameInputProps> = ({ username, setUsername }) => {
  return (
    <Form.Group controlId="formUsername">
      <Form.Control
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </Form.Group>
  );
};

export default UsernameInput;
