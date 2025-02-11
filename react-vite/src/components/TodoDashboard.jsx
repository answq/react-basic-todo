import styled from "styled-components";

const TodoDashboard = () => {
  return (
    <TodoDashboardSection>
      <TodoDashboardHeader>Quick Access</TodoDashboardHeader>
      <TodoDashboardCardList>
        <li>
          <TodoDashboardCard>
            <div>icon</div>
            <p>16 All Tasks</p>
          </TodoDashboardCard>
        </li>
        <li>
          <TodoDashboardCard>
            <div>icon</div>
            <p>5 Completed Tasks</p>
          </TodoDashboardCard>
        </li>
        <li>
          <TodoDashboardCard>
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

const TodoDashboardCard = styled.li`
  display: flex;
  flex-direction: column;
`;
export default TodoDashboard;
