import { useState } from "react";
import { useAddTodoMutation } from "../hooks/useTodoQuery";

const TodoForm = () => {
  const { mutate: addTodoMutate } = useAddTodoMutation();
  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!todoText.trim()) {
      return;
    }

    addTodoMutate(todoText);

    setTodoText("");
  };

  const handleChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row flex-wrap gap-2">
      <input
        type="text"
        value={todoText}
        onChange={handleChangeTodoText}
        placeholder="할 일을 입력하세요"
        className="flex-[8] p-2 text-base border border-gray-300 rounded-1g bg-white placeholder-gray-400 focus:border-[#582be6] focus:outline-none"
      />
      <button
        type="submit"
        className="flex-1 text-center px-4 py-2 text-white rounded-1g bg-[#582be6] hover:bg-[#4422b5] transition-colors"
      >
        제출하기
      </button>
    </form>
  );
};

export default TodoForm;
