import { useMutation } from "@tanstack/react-query";
import { AuthType } from "../../../../types/auth-types";
import { request } from "../../../../config/request";
import Cookie from "js-cookie";

export const useLogin = () => {
  return useMutation({
    mutationFn: (data: AuthType) =>
      request.post("/stores/login", data).then((res) => {
        const { data } = res.data;
        Cookie.set("user_token", data.access_token);
        return data;
      }),
  });
};
