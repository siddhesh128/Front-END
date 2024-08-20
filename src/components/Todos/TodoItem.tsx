import React from "react";
import { ListGroup, Button, Form } from "react-bootstrap";
import { Todo } from '../../types/types';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onEdit: (todo: Todo) => void;
  onDelete: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onEdit, onDelete }) => {
  return (
    <ListGroup.Item
      key={todo.id}
      className="d-flex justify-content-between align-items-center"
    >
      <div>
        <Form.Check
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {todo.task}
      </div>
      <div>
        {!todo.completed && (
          <Button variant="info" onClick={() => onEdit(todo)} className="me-2">
            Edit
          </Button>
        )}
        <Button variant="danger" onClick={() => onDelete(todo.id)}>
          Delete
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default TodoItem;
