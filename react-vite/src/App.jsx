import QueryProvider from "./components/provider/QueryProvider";
import RootLayout from "./components/todo/layout/RootLayout";
import HomePage from "./pages/Homepage";
import TodoDetailPage from "./pages/TodoDetailPage";
import { BrowserRouter, Routes, Route } from "react-router";

const App = () => {
  return (
    <BrowserRouter>
      <QueryProvider>
        <Routes>
          <Route path="/" element={<RootLayout />} />
          <Route index element={<HomePage />} />
          <Route path="todos/:id" element={<TodoDetailPage />} />
        </Routes>
        ;
      </QueryProvider>
    </BrowserRouter>
  );
};

export default App;
//{<TodoProvider><RootLayout><TodoContainer /></RootLayout></TodoProvider>}
