import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import {
  fetchTodos,
  addTodo,
  deleteTodo,
  updateTodo,
  toggleCompleted,
} from "../../services/todoService";
import { Todo } from "../../types/types";
import styles from "../../styles/todos.module.css";

const Todos: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [editingTask, setEditingTask] = useState<Todo | null>(null);
  const navigate = useNavigate();

  const username = localStorage.getItem("username");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const loadTodos = async () => {
      if (token) {
        const response = await fetchTodos(token);
        setTodos(response.data);
      }
    };

    loadTodos();
  }, [token]);

  const handleAddTask = async () => {
    if (token) {
      const response = await addTodo(newTask, token);
      setTodos([...todos, response.data]);
      setNewTask("");
    }
  };

  const handleDeleteTask = async (id: number) => {
    if (token) {
      await deleteTodo(id, token);
      setTodos(todos.filter((todo) => todo.id !== id));
    }
  };

  const handleEditTask = (todo: Todo) => {
    setEditingTask(todo);
    setNewTask(todo.task);
  };

  const handleUpdateTask = async () => {
    if (editingTask && token) {
      await updateTodo(editingTask.id, newTask, token);
      setTodos(
        todos.map((todo) =>
          todo.id === editingTask.id ? { ...todo, task: newTask } : todo
        )
      );
      setNewTask("");
      setEditingTask(null);
    }
  };

  const handleToggleCompleted = async (id: number) => {
    if (token) {
      await toggleCompleted(id, token);
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    }
  };

  const handleLogout = () => {
    Swal.fire({
      icon: "info",
      title: "Logout",
      text: "Are you sure you want to log out?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        navigate("/login");
      }
    });
  };

  return (
    <Container className={`mt-5 ${styles.todosContainer}`}>
      <Row>
        <Col md={8} className="mx-auto">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="text-center">Your Todos</h1>
            <Button variant="danger" onClick={handleLogout}>
              Logout
            </Button>
          </div>
          <h3 className="text-center">Welcome back, {username}!</h3>
          <TodoForm
            newTask={newTask}
            setNewTask={setNewTask}
            editingTask={Boolean(editingTask)}
            onSubmit={editingTask ? handleUpdateTask : handleAddTask}
          />
          <Row>
            <Col>
              <h4>Pending Tasks</h4>
              <TodoList
                todos={todos.filter((todo) => !todo.completed)}
                onToggle={handleToggleCompleted}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
              />
            </Col>

            <Col>
              <h4>Completed Tasks</h4>
              <TodoList
                todos={todos.filter((todo) => todo.completed)}
                onToggle={handleToggleCompleted}
                onEdit={handleEditTask}
                onDelete={handleDeleteTask}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Todos;
