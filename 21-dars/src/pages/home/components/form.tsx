import React from "react";
import { useForm } from "react-hook-form";
import { useCreateTodo } from "../service/mutatuion/useDeleteTodo";
import { useQueryClient } from "@tanstack/react-query";
interface inputS {
  title: string;
  price: string;
}

export const Form = () => {
  const { register, handleSubmit, reset } = useForm<inputS>();

  const { mutate } = useCreateTodo();
  const client = useQueryClient();

  const submit = (data: inputS) => {
    mutate(data, {
      onSuccess: () => {
        reset();
        client.invalidateQueries({ queryKey: ["todo_list"] });
      },
    });
  };
  return (
    <div className="p-[20px]" onSubmit={handleSubmit(submit)}>
      <form>
        <div>
          <input
            type="text"
            className="placeholder:text-blue-400 border-2 mb-[10px]"
            placeholder="enter to title..."
            {...register("title")}
          />
        </div>
        <div>
          <input
            type="text"
            className="placeholder:text-blue-400 border-2 "
            placeholder="enter to price..."
            {...register("price")}
          />
        </div>
        <div>
          <button className="submit bg-green-500 border-2">send</button>
        </div>
      </form>
    </div>
  );
};
