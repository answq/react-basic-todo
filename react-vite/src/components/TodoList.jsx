import { useContext } from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import { TodoContext } from "../context/TodoContext";
import { useParams, useSearchParams } from 'react-router';

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  const [searchParams] useSearchParams();
  
  const selectedFilter = searchParams.get("filter");
  const getFilteredTodos = (selectedFilter) => {
    if(selectedFilter ==="completed") {
      return todos.filter((todo) => !todo.completed);
    }
  }
  return (
    <TodoListSection>
      <TodoListHeader>Tasks</TodoListHeader>
      <TodoListContent>
        {todos.map(({ id, text, completed }) => (
          <TodoItem key={id} completed={completed} text={text} id={id} />
        ))}
      </TodoListContent>
    </TodoListSection>
  );
};

const TodoListSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TodoListHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const TodoListContent = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export default TodoList;
