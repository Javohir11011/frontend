"use client";
import { useQuery } from "@tanstack/react-query";
import { request } from "http";

export const GetCategoriesQuery = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: GetCategories,
  });
};

export const GetCategories = async () => {
  const res = await fetch("http://localhost:4000/category");
  const data = await res.json();

  return data;
};
