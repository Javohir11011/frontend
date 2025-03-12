import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export interface DebType {
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

      const debtResponse = await request.post("/debt/create", {
        debt_date,
        debt_period,
        debt_sum,
        debtor_id,
        description,
      });
      const debtId = debtResponse.data.data.id;

      if (img) {
        const formData = new FormData();
        formData.append("file", img);

        await request.post(`/debts-images/upload/${debtId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }

      return;
    },
  });
};
