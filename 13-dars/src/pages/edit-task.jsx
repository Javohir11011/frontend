import React from "react";
import { useParams } from "react-router-dom";
import { TodoContextProvider } from "../context/todo-context/todo-context";
import { Form } from "../components/form";

export const EditTask = () => {
  const { id } = useParams();
  const { data, dispatch } = React.useContext(TodoContextProvider);

  const defValue = data.todoList.find((item) => item.id === id);

  return (
    <div>
      <h1>Edit task</h1>
      <button
        className="block cursor-pointer mb-[20px]"
        onClick={() => router(-1)}
      >{`<=`}</button>
      <Form defValue={defValue} />
    </div>
  );
};
