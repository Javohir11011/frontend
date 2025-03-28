"use client";

import { useQuery } from "@tanstack/react-query";

export const getByIdProductFetch = async (id: string) => {
  const response = await fetch(`http://13.233.2.40:3133/api/v1/product/${id}`);
  const data = await response.json();
  return data.data;
};
const getByIdProduct = (id: string) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["single"],
    queryFn: () => getByIdProductFetch(id),
  });
  return { data, isLoading, refetch };
};
export default getByIdProduct;
