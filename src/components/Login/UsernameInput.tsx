import React from "react";
import { Form } from "react-bootstrap";

interface UsernameInputProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

const UsernameInput: React.FC<UsernameInputProps> = ({ username, setUsername }) => {
  return (
    <Form.Group className="mb-3">
      <Form.Label>Username</Form.Label>
      <Form.Control
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter your username"
      />
    </Form.Group>
  );
};

export default UsernameInput;
