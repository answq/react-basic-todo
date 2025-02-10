import React from "react";
import styled from "styled-components";
import { ActionButton } from "./TodoItem";

const TodoForm = ({ handleSubmit, todoText, handleInputChange }) => {
  return (
    <TodoFormWrapper onSubmit={handleSubmit}>
      <TodoFormInput
        type="text"
        value={todoText}
        onChange={handleInputChange}
        placeholder="Enter a new todo"
      />
      <SubmitButton type="submit">Add Todo</SubmitButton>
    </TodoFormWrapper>
  );
};

const TodoFormWrapper = styled.form`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;

const TodoFormInput = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  background-color: white;
  flex: 1;
  &::placeholder {
    color: #aaa;
  }
  &:focus {
    border-color: #582be6;
    outline: none;
  }
`;

const SubmitButton = styled(ActionButton)``;

export default TodoForm;
