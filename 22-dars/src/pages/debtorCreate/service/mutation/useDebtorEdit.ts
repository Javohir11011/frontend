import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export interface UpdateDebtor {
  full_name?: string;
  address?: string;
  description?: string;
  phone?: string;
}

export const useEditDebtor = () => {
  return useMutation({
    mutationFn: async ({ id, data }: { id: string; data: UpdateDebtor }) => {
      console.log(data);
      const { full_name, address, description } = data;

      await request.patch(`/debtor/${id}`, {
        full_name,
        address,
        description,
      });

      await request.patch(`/phone-numbers/${id}`, {
        phone_numbers: [data.phone],
      });
    },
  });
};
