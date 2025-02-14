import { useParams } from "react-router";
import { SAMPLE_TODOS } from "../constants/sample-todos";
import TodoItem from "../components/TodoItem";
import { ActionButton } from "../components/TodoItem";
import { Link } from "react-router";

const TodoDetailPage = () => {
  const { id } = useParams();
  const TargetTodoItem = SAMPLE_TODOS.find((todo) => {
    todo.id === id;
  });
  return (
    <div>
      <TodoItem
        id={TargetTodoItem.id}
        text={TargetTodoItem.text}
        completed={TargetTodoItem.completed}
      />
      <ActionButton $bgColor="#242424">
        <Link to="/">돌아가기</Link>
      </ActionButton>
    </div>
  );
};

export default TodoDetailPage;
