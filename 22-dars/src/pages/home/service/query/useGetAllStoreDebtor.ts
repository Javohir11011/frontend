import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetAllDebtor = () => {
  return useQuery({
    queryKey: ["store_list"],
    queryFn: () => request.get("/stores/allpayment").then((res) => res.data),
  });
};
