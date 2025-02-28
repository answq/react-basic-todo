import QueryProvider from "./components/provider/QueryProvider";
import HomePage from "./pages/Homepage";
import TodoDetailPage from "./pages/TodoDetailPage";
import { BrowserRouter, Routes, Route } from "react-router";
import { useThemeStore } from "./hooks/useThemeStore";
import { useEffect } from "react";

const App = () => {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove("dark", "light");

    root.classList.add(theme);
  }, [theme]);
  return (
    <BrowserRouter>
      <QueryProvider>
        <Routes>
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
