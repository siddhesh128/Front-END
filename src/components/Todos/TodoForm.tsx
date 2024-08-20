import React from "react";
import { Form, Button } from "react-bootstrap";

interface TodoFormProps {
  newTask: string;
  setNewTask: React.Dispatch<React.SetStateAction<string>>;
  editingTask: boolean;
  onSubmit: () => void;
}

const TodoForm: React.FC<TodoFormProps> = ({
  newTask,
  setNewTask,
  editingTask,
  onSubmit,
}) => {
  return (
    <Form className="mb-4 mt-3">
      <Form.Group controlId="formTask">
        <Form.Control
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </Form.Group>
      <Button variant={editingTask ? "warning" : "primary"} onClick={onSubmit} className="mt-2">
        {editingTask ? "Update Task" : "Add Task"}
      </Button>
    </Form>
  );
};

export default TodoForm;
