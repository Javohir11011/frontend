import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useDeleteTodo = () => {
  return useMutation({
    mutationFn: (id: number) =>
      request.delete(`/phones/${id}`).then((res) => res.data),
  });
};
