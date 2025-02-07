import React from "react";

const TodoItem = ({ completed, text, id, handleToggleCompleted, handleDelete }) => {
  return (
    <li style={{ textDecoration: completed ? "line-through" : "none" }}>
      {text}

      <div>
        <button onClick={() => handleToggleCompleted(id)}>
          {completed ? "취소하기" : "완료하기"}
        </button>
        <button onClick={() => handleDelete(id)}>삭제하기</button>
      </div>
    </li>
  );
};

export default TodoItem;
