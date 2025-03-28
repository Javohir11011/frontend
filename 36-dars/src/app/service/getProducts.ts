import { Product } from "@/types/product";
import { useQuery } from "@tanstack/react-query";

export const getProductsFetch = async (
  filter: Record<string, string>
): Promise<Product[]> => {
  const filterData = new URLSearchParams(filter).toString();

  const response = await fetch(
    `http://13.233.2.40:3133/api/v1/product?filter=${JSON.stringify(filter)}`
  );
  const data = await response.json();
  return data.data.products;
};
const getProducts = (filter: object) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProductsFetch(filter as Record<string, string>),
  });
  return { data, isLoading, refetch };
};
export default getProducts;
