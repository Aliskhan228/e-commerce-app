import React from "react";
import { ProductCard } from "./product-card";
import { Product } from "@/store/slices/product-slice";

interface Props {
  items: Product[];
  className?: string;
}

export const ProductList: React.FC<Props> = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-4 gap-y-10">
      {items.map((item) => (
        <ProductCard item={item} />
      ))}
    </div>
  );
};
