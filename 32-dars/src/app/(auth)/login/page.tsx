"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { loginUser } from "../_service/auth-service";

export interface ILogin {
  email: string;
  password: string;
}

const Login = () => {
  const { handleSubmit, register, reset } = useForm();
  const [transition, setTransition] = React.useTransition();
  const router = useRouter();

  const submit = (data: ILogin) => {
    setTransition(async () => {
      try {
        const res = await loginUser(data);
        if (res) {
          reset();
          router.push("/profile");
        }
      } catch (error) {
        console.log(error);
      }
    });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit(submit)}>
        <div className="pb-[10px] pt-[20px]">
          <input
            placeholder="entere email..."
            {...register("email")}
            type="email"
            className="bg-gray-300 p-[10px]  rounded-[10px] w-[300]"
          />
        </div>
        <div className="pb-[10px]">
          <input
            placeholder="entere password..."
            {...register("password")}
            type="password"
            className="bg-gray-300 p-[10px]  rounded-[10px] w-[300]"
          />
        </div>
        <button
          type="submit"
          className="pt-[10px] bg-green-400 rounded-[10px] p-[10px]"
        >
          {transition ? "Sabr qil jigar!!!" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
