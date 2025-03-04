import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetTodo = () => {
  return useQuery({
    queryKey: ["todo_list"],
    queryFn: () => request.get("/phones").then((res) => res.data),
  });
};
