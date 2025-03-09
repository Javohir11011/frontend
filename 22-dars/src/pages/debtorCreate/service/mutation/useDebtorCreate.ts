import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export interface DebtorType {
  full_name: string;
  address: string;
  description: string;
  phone: string;
  image: File | null;
}

export const useDebtorCreate = () => {
  return useMutation({
    mutationFn: async (data: DebtorType) => {

      const { full_name, address, description, image } = data;
      const debtorResponse = await request.post("/debtor/create", {
        full_name,
        address,
        description,
      });
      const debtorId = debtorResponse.data.data.id;
      const { phone } = data;
      await request.post("/phone-numbers/create", {
        debtor_id: debtorId,
        phone_numbers: [phone],
      });
      await request.post(`/debtor-images/upload/${debtorId}`);
      if (image) {
        const formData = new FormData();
        formData.append("file", image);

        await request.post(`/debtor-images/upload/${debtorId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      }

      return;
    },
  });
};
