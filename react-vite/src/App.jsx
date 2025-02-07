import React from "react";
import "./App.css";
import RootLayout from "./components/todo/layout/RootLayout";
import TodoContainer from "./components/todo/TodoContainer";
const App = () => {
  return (
    <RootLayout>
      <TodoContainer />
    </RootLayout>
  );
};

export default App;
