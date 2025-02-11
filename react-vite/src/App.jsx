import "./App.css";
import RootLayout from "./components/todo/layout/RootLayout";
import TodoContainer from "./components/todo/TodoContainer";
import TodoProvider from "./components/provider/TodoProvider";
const App = () => {
  return (
    <TodoProvider>
      <RootLayout>
        <TodoContainer />
      </RootLayout>
    </TodoProvider>
  );
};

export default App;
