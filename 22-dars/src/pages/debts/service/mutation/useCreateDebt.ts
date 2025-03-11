import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

interface DebType {
  debt_date: string;
  debt_period: number;
  debt_sum: number;
  debtor_id: string;
  description: string;
  img: File;
}
export const useCreateDebt = () => {
  return useMutation({
    mutationFn: async (data: DebType) => {
      const { debt_date, debt_period, debt_sum, debtor_id, description, img } =
        data;
      const debtResponse = await request.post("/debtor/create", {
        debt_date,
        debtor_id,
        debt_period,
        debt_sum,
        description,
      });
      return;
    },
  });
};
