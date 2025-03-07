import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export interface DebtorType {
  full_name: string;
  address: string;
  description: string;
}

export const useDebtorCreate = () => {
  return useMutation({
    mutationFn: (data: DebtorType) =>
      request.post("/debtor/create", data).then((res) => res.data),
  });
};
