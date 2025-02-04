import React from "react";

const TodoForm = ({ handleSubmit, todoText, handleInputChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={handleInputChange}
        placeholder="Enter a new todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
