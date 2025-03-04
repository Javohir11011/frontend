import { useDeleteTodo } from "../pages/home/service/mutatuion/useDeleteTodo";
import { useQueryClient } from "@tanstack/react-query";
import { useEditTodo } from "../pages/home/service/mutatuion/useEditTodo";

export interface todoT {
  img: string;
  title: string;
  rame: string;
  color: string;
  brand: string;
  price: string;
  id: number;
}

export const TodoCart = ({ id, title, price }: todoT) => {
  // const { id } = useParams();
  const client = useQueryClient();
  const { mutate } = useDeleteTodo();
  const { mutate: mutate1 } = useEditTodo();
  const onChangeDelBtn = () => {
    mutate(id, {
      onSuccess: () => {
        client.invalidateQueries({ queryKey: ["todo_list"] });
      },
    });
  };
  const onChangeEdBtn = () => {
    const title = prompt("edit to title...");
    const price = prompt("edit to price...");
    const newData = { title, price };
    mutate1(
      { id, newData },
      {
        onSuccess: () => {
          client.invalidateQueries({ queryKey: ["todo_list"] });
        },
      }
    );
  };
  return (
    <div>
      <h2>{title}</h2>
      <p>{price}</p>
      <div className="flex gap-[30px] p-[20px] items-start">
        <button className="bg-red-200 p-[10px]" onClick={onChangeDelBtn}>
          delete
        </button>
        <button className="bg-amber-600 p-[10px]" onClick={onChangeEdBtn}>
          edit
        </button>
      </div>
    </div>
  );
};
