import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useSearchDebtor = (phone_number: string) => {
  return useQuery({
    queryKey: ["search_debtor", phone_number],
    queryFn: () =>{
        request
        .get(`/debtor/search?phone_number=${phone_number}`)
        .then((res) => res.data.data)
    }
  });
};
