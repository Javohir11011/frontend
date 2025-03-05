import { useMutation } from "@tanstack/react-query";
import { AuthType } from "../../../../types/auth-types";
import { request } from "../../../../config/request";
import { saveCookieState } from "../../../../config/cookie";

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: AuthType) =>
      request.post("/admin/login", data).then((res) => {
        const { data } = res.data;
        saveCookieState("user_token", data.access_token, 15);
        return data;
      }),
  });
};
