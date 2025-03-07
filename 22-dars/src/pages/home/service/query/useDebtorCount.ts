import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useDebtprCount = () => {
  return useQuery({
    queryKey: ["debtor_count"],
    queryFn: () => request.get("/stores/debtor-count").then((res) => res.data),
  });
};
