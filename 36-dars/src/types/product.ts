import { Category } from "./category";

export interface Product {
  id: string;
  category_id: string;
  title: string;
  picture: string;
  summary: string;
  description: string;
  price: string;
  tags: string;
  size: string;
  type: string;
  category: Category;
}
