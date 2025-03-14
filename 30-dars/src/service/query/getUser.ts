"use server";
import { userT } from "../mutation/createUser";

const url = process.env.BACE_URL;

export const getAllUser = async () => {
  const res = await fetch(`${url}/todos`, {
    next: {
      tags: ["user_list"],
    },
  });
  if (!res.ok) {
    throw new Error("Xatolik yuz berdi!!!");
  }
  const data: userT[] = await res.json();
  return data;
};
