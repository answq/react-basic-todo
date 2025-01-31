import { useState } from "react";

const SAMPLE_TODOS = [
  { id: 1, text: "Buy milk" },
  { id: 2, text: "Clean the house" },
  { id: 3, text: "Go for a run" },
  { id: 4, text: "Finish homework" },
  { id: 5, text: "Call mom" },
  { id: 6, text: "Buy groceries" },
  { id: 7, text: "Walk the dog" },
  { id: 8, text: "Read a book" },
  { id: 9, text: "Do laundry" },
  { id: 10, text: "Write code" },
];

const TodoList = () => {
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={todoText}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map(({ id, text, completed }) => (
          <li key={id}>
            <p>{text}</p>
            <button onClick={() => handleToggleCompleted(id)}>
              {completed ? "취소하기" : "완료하기"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
