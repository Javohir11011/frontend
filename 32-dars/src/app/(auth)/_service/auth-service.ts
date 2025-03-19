"use server";

import { cookies } from "next/headers";
import { ILogin } from "../login/page";
import { IUser } from "../register/page";

export const registerUser = async (data: IUser) => {
  const res = await fetch(`${process.env.url}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const resData = await res.json();

  return resData;
};

export const loginUser = async (data: ILogin) => {
  const loginCookie = cookies();
  const res = await fetch(`${process.env.url}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const resData: ILogin = await res.json();
  // console.log(loginCookie);
  console.log(resData);

  (await loginCookie).set("token", resData.accessToken);
  (await loginCookie).set("user", JSON.stringify(resData.user));

  return resData;
};
