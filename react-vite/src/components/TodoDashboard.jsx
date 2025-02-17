import { useContext } from "react";
import styled from "styled-components";
import { TodoContext } from "../context/TodoContext";
import { Link, useSearchParams } from "react-router";

const TodoDashboard = () => {
  const { todos } = useContext(TodoContext);
  const [searchParams] = useSearchParams();

  const all = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const pending = all - completed;

  const selectedFilter = searchParams.get("filter");
  return (
    <TodoDashboardSection>
      <TodoDashboardHeader>Quick Access</TodoDashboardHeader>
      <TodoDashboardCardList>
        <li>
          <TodoDashboardCard to="/" $selected={!selectedFilter}>
            <div>icon</div>
            <p>16 All Tasks</p>
          </TodoDashboardCard>
        </li>
        <li>
          <TodoDashboardCard to="?filter=completed" $bgColor="#582be6"
          $selected={selectedFilter ==="completed"}>
            <div>icon</div>
            <p>5 Completed Tasks</p>
          </TodoDashboardCard>
        </li>
        <li>
          <TodoDashboardCard
            to="?filter=pending"
            $bgColor="#242424"
            $selected={selectedFilter === "pending"}
          >
            <div>icon</div>
            <p>11 Todo Tasks</p>
          </TodoDashboardCard>
        </li>
      </TodoDashboardCardList>
    </TodoDashboardSection>
  );
};

const TodoDashboardSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TodoDashboardHeader = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const TodoDashboardCardList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TodoDashboardCard = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export default TodoDashboard;
