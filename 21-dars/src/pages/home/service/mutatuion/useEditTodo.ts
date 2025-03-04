import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";
import { inputS } from "../../components/form";

export const useEditTodo = () => {
  return useMutation({
    mutationFn: (id, newData : inputS) =>
      request.put(`/phones/${id}`, newData).then((res) => res.data),
  });
};
