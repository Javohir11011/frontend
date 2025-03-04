import { Form } from "./components/form";
import { useGetTodo } from "./service/query/useGetTodo";
import { TodoCart } from "../../components/todo.cart";

export const Home = () => {
  const { data, isLoading } = useGetTodo();

  return (
    <div className="container pt-[30px]">
      <Form />
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="grid grid-cols-3">
          {data.map((item: any) => (
            <TodoCart
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
      )}
    </div>
  );
};
