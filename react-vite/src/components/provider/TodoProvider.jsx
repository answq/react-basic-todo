import { useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { SAMPLE_TODOS } from '../../constants/sample-todos';

const TodoProvider = ({ children }) => {
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
    <TodoContext.Provider
      value={{
        todos,
        handleSubmit,
        handleInputChange,
        handleToggleCompleted,
        handleDelete,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
