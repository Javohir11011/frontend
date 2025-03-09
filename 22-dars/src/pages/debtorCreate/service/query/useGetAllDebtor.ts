import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useGetAllDebtor = () => {
  return useQuery({
    queryKey: ["debtor_list"],
    queryFn: () => request.get("/debtor/all").then((res) => res.data.data),
  });
};
