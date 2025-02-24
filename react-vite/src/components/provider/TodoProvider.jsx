import { useEffect, useState } from "react";
import { TodoContext } from "../../context/TodoContext";
import { todoClient } from "../../lib/todoClient";

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const getTodoItem = async (id) => {
    const { data } = await todoClient.get(`/${id}`);
    setTodos(data);
  };

  const addTodos = async (text) => {
    const { data } = await todoClient.post("/", {
      text,
      completed: false,
    });
    await getTodoItem();
    return data;
  };

  const toggleTodoCompleted = async (id, currentCompleted) => {
    const { data } = await todoClient.patch(`/${id}`, {
      completed: !currentCompleted,
    });
    await getTodoItem();
    return data;
  };

  const deleteTodo = async (id) => {
    const { data } = await todoClient.delete(`/${id}`);
    await getTodoItem();
    return data;
  };

  const getFilteredTodos = (selectedFilter) => {
    if (selectedFilter === "completed") {
      return todos.filter((todo) => todo.completed);
    }

    if (selectedFilter === "pending") {
      return todos.filter((todo) => !todo.completed);
    }

    return todos;
  };

  useEffect(() => {
    getTodoItem();
  }, []);

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodos,
        toggleTodoCompleted,
        deleteTodo,
        getFilteredTodos,
        getTodoItem,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
