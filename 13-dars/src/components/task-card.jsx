import React from "react";
import { useNavigate } from "react-router-dom";

export const TaskCard = ({ id, title, des }) => {
  const navigate = useNavigate();
  const changeData = () => {
    navigate(`/edit-task/${id}`);
  };

  const deleteData = () => {
    navigate(`/delete-task/${id}`);
  };

  return (
    <div
      className="rounded-lg flex justify-between items-center mb-[20px] w-full border border-blue-500 p-[20px]"
      key={id}
    >
      <div>
        <h1 className="text-4xl text-blue-400">{title}</h1>
        <p>{des}</p>
      </div>
      <div className="flex justify-between gap-[30px]">
        <button onClick={changeData} className="p-3 bg-amber-600 cursor-pointer">
          Edit
        </button>
        <button onClick={deleteData} className="p-3 bg-green-400 cursor-pointer">
          Delete
        </button>
      </div>
    </div>
  );
};
