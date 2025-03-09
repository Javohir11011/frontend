import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

interface DebType {
  debt_period: number;
  debt_sum: number;
  description: string;
}
export const useCreateDebt = () => {
  return useMutation({
    mutationFn: (data: DebType) =>
      request.post("/debt/create", data).then((res) => res.data),
  });
};
