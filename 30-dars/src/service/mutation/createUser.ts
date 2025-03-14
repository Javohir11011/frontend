"use server";

import { revalidateTag } from "next/cache";

export interface userT {
  title: string;
  description: string;
  id: number;
}

const url = process.env.BACE_URL;

export const createUser = async (user: userT) => {
  const res = await fetch(`${url}/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!res.ok) {
    throw new Error("Xatolik yuz berdi!!!");
  }

  revalidateTag("user_list");
  const data: userT = await res.json();
  return data;
};
