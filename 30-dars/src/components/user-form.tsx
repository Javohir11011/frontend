"use client";
import { createUser, userT } from "@/service/mutation/createUser";
import { useTransition } from "react";
import { useForm } from "react-hook-form";

export const UserForm = () => {
  const { handleSubmit, reset, register, setError } = useForm<userT>();
  const [loading, setLoading] = useTransition();

  const sumbit = (data: userT) => {
    setLoading(async () => {
      try {
        await createUser(data);
        reset();
      } catch (error) {
        const err = error as Error;
        setError("title", { message: err.message });
      }
    });
  };
  return (
    <div className="pt-[50px] pb-[20px]">
      <form onSubmit={handleSubmit(sumbit)}>
        <div className="pt-[10px]">
          <input
            type="text"
            placeholder="enter title..."
            className="text-[20px] bg-gray-300"
            {...register("title")}
          />
        </div>
        <div className="pt-[10px] pb-[10px]">
          <input
            type="text"
            placeholder="enter description..."
            className="text-[20px] bg-gray-300 "
            {...register("description")}
          />
        </div>
        <button
          className="text-[10px] cursor-pointer bg-green-400 rounded-[5px] p-[10px]"
          type="submit"
        >
          {loading ? "loading" : "send"}
        </button>
      </form>
    </div>
  );
};
