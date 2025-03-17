"use server";

import { revalidateTag } from "next/cache";
import { userT } from "./createUser";

const url = process.env.BACE_URL;

export const deleteUser = async (id: string) => {
  console.log(id);
  
  const res = await fetch(`${url}/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
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
