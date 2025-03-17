"use client";
import { userT } from "@/service/mutation/createUser";
import { deleteUser } from "@/service/mutation/deleteUser";
import { updateUser } from "@/service/mutation/updateUser"; 
import React, { useState, useTransition } from "react";

export const UserCard = ({ id, title, description }: userT) => {
  const [isPending, startTransition] = useTransition();
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const deleteBtn = () => {
    startTransition(async () => {
      try {
        await deleteUser(id);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      }
    });
  };

  const updateBtn = () => {
    startTransition(async () => {
      try {
        await updateUser(id, { title: newTitle, description: newDescription });
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      }
    });
  };

  return (
    <div className="rounded-[7px] bg-blue-600 p-[10px]">
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        className="text-[19px] bg-gray-300 p-1 w-full"
      />
      <input
        type="text"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        className="text-[15px] bg-gray-300 p-1 w-full mt-2"
      />
      <div className="flex gap-[10px] mt-2">
        <button
          className="bg-yellow-500 rounded-[5px] p-[5px]"
          onClick={updateBtn}
          disabled={isPending}
        >
          {isPending ? "Updating..." : "Update"}
        </button>
        <button
          className="bg-red-500 rounded-[5px] p-[5px]"
          onClick={deleteBtn}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
