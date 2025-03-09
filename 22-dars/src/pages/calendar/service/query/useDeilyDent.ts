import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetDeilyDebt = (date: string) => {
  return useQuery({
    queryKey: ["deily_amount"],
    queryFn: () =>
      request.get(`/stores/daily-debt?date=${date}`).then((res) => res.data),
  });
};
