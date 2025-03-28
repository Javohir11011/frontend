import { Category } from "@/types/category";
import { useQuery } from "@tanstack/react-query";

export const getCategoryFetch = async (): Promise<Category[]> => {
  const response = await fetch("http://13.233.2.40:3133/api/v1/category");
  const data = await response.json();
  return data.data;
};
const getCategories = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryFetch,
  });
  return { data, isLoading };
};
export default getCategories;
