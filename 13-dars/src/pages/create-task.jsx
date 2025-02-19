import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../components/form";

export const CreateTask = () => {
  const router = useNavigate();


  return (
    <div>
      <button
        className="block cursor-pointer mb-[20px]"
        onClick={() => router(-1)}
      >{`<=`}</button>
      <Form />
    </div>
  );
};
