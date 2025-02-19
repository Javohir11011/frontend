import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { TodoContextProvider } from "../context/todo-context/todo-context";
import { todoAction } from "../context/todo-context/todo-reducer";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";

export const Form = ({ defValue }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: defValue?.title,
      des: defValue?.des,
    },
  });

  const { dispatch } = useContext(TodoContextProvider);

  const navigate = useNavigate();

  const submit = (data) => {
    if (!defValue) {
      dispatch({
        type: todoAction.CREATE_TODO,
        value: {
          ...data,
          id: nanoid(),
        },
      });
    } else {
      dispatch({
        type: todoAction.EDIT_TODO,
        value: { ...data, id: defValue.id },
      });
    }
    navigate("/");
  };
  return (
    <>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <input
            className="bg-blue-300 border-2"
            {...register("title", {
              required: true,
              minLength: { value: 3, message: "eng kam qiymat 3 ta" },
            })}
            type="text"
          />
          {errors.title && (
            <p className="text-[12px] text-red-500">{errors.title.message}</p>
          )}
        </div>
        <div>
          <input
            className="bg-blue-300 border-2 "
            {...register("des", {
              required: true,
              minLength: { value: 3, message: "eng kam qiymat 3 ta" },
            })}
            type="text"
          />
          {errors.des && (
            <p className="text-[12px] text-red-500">{errors.des.message}</p>
          )}
        </div>
        <button className="bg-green-400 cursor-pointer" type="submit">
          send
        </button>
      </form>
    </>
  );
};
