import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../../../config/request";
import { message } from "antd";

export const useDeleteDebtor = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) =>
      request.delete(`/debtor/${id}`).then((res) => res.data),
    onSuccess: () => {
      message.success("Mijoz o‘chirildi!");
      queryClient.invalidateQueries(["debtor_list"]);
    },
    onError: () => {
      message.error("Xato jigar!!!");
    },
  });
};
