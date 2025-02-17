import { useParams } from "react-router";
import { SAMPLE_TODOS } from "../constants/sample-todos";
import TodoItem from "../components/TodoItem";
import { ActionButton } from "../components/TodoItem";
import { Link } from "react-router";
import styled from "styled-components";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoDetailPage = () => {
  const {todos} = useContext(TodoContext);
  const { id } = useParams();
  const TargetTodoItem = todos.find((todo) => {
    todo.id === id;
  });
  return (
    <DetailPageWrapper>

      {TargetTodoItem ? (<TodoItem
        id={TargetTodoItem.id}
        text={TargetTodoItem.text}
        completed={TargetTodoItem.completed}
      />) : (<p>해당하는 데이터를 찾을 수 없습니다.</p>)}
      
      <BackLink to="/">
        <ActionButton $bgColor="#242424">돌아가기</ActionButton>
      </BackLink>
    </DetailPageWrapper>
  );
};

export default TodoDetailPage;

const DetailPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const BackLink = styled(Link)`
  flex: 1;
  button {
    width: 100%;
  }
`;
