"use server";

import { revalidateTag } from "next/cache";
import { userT } from "./createUser";

const url = process.env.BACE_URL;

export const updateUser = async (id: string, data: userT) => {
  const res = await fetch(`${url}/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(`Xatolik yuz berdi! Server javobi: ${res.status}`);
  }

  revalidateTag("user_list");

  try {
    const data: userT[] = await res.json();
    return data;
  } catch (error) {
    return [];
  }
};
