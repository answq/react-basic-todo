import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import {
  addTodos,
  deleteTodo,
  getTodos,
  toggleTodoCompleted,
} from "../api/todo-api";
import { QueryClient } from "@tanstack/react-query";
import { QueryClient } from "@tanstack/react-query";

export const useTodoQuery = (filter) => {
  return useQuery({
    queryKey: ["todos", filter],
    queryFn: () => getTodos(filter),
  });
};

export const useAddTodoMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addTodos,
    onSettled: () => {
      return queryClient.invalidateQueries(["todos"]);
    },
  });
};

export const useToggleTodoMutaion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, completed }) => toggleTodoCompleted(id, completed),
    onSettled: () => {
      return queryClient.invalidateQueries(["todos"]);
    },
  });
};

export const useDeleteTodoMutaion = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSettled: () => {
      return queryClient.invalidateQueries(["todos"]);
    },
  });
};
