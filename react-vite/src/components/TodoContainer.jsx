import React from "react";
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoDashboard from "./TodoDashboard";
import TodoContainer from './TodoContainer';
import styled from "styled-components";

const SAMPLE_TODOS = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Clean the house", completed: false },
  { id: 3, text: "Go for a run", completed: false },
  { id: 4, text: "Finish homework", completed: false },
  { id: 5, text: "Call mom", completed: false },
  { id: 6, text: "Buy groceries", completed: false },
  { id: 7, text: "Walk the dog", completed: false },
  { id: 8, text: "Read a book", completed: false },
  { id: 9, text: "Do laundry", completed: false },
  { id: 10, text: "Write code", completed: false },
];

const TodoContainer = () => {
  const [todos, setTodos] = useState(SAMPLE_TODOS);
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoText.trim()) {
      return;
    }
    setTodos([...todos, { id: crypto.randomUUID(), text: todoText }]);

    setTodoText();
  };

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleToggleCompleted = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        const newTodo = {
          ...todo,
          completed: !todo.completed,
        };
        return newTodo;
      } else {
        return todo;
      }
    });
    setTodos(updatedTodos);
  };
  const handleDelete = (id) => {
    const filteredTodos = todos.filter((todo) => {
      if (todo.id === id) {
        return false;
      }
      return true;
    });
    setTodos(filteredTodos);
  };
  return (
    <TodoContainerWrapper>
      <TodoDashboard />
      <TodoForm
        handleSubmit={handleSubmit}
        todoText={todoText}
        handleInputChange={handleInputChange}
      />
      <TodoList
        todos={todos}
        handleToggleCompleted={handleToggleCompleted}
        handleDelete={handleDelete}
      />
    </TodoContainerWrapper>
  );
};

const TodoContainerWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`
export default TodoContainer;
