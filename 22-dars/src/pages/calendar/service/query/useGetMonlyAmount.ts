import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetMontlyAmount = () => {
  return useQuery({
    queryKey: ["monthly_amount"],
    queryFn: () => request.get(`/stores/monthly-debt`).then((res) => res.data),
  });
};
