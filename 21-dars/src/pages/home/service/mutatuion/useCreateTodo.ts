import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useCreateTodo = () => {
  return useMutation({
    mutationFn: (data: { title: string; price: string }) =>
      request.post("/phones", data).then((res) => res.data),
  });
};
