import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useEditTodo = () => {
  return useMutation({
    mutationFn: (id) => request.put(`/phones/${id}`).then((res) => res.data),
  });
};
