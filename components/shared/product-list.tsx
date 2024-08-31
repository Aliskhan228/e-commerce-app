import React from "react";
import { ProductCard } from "./product-card";
import { Product } from "@/types/product";
import { selectError, selectLoading } from "@/store/selectors";
import { useSelector } from "react-redux";
import { Skeleton } from "../ui/skeleton";
import { ProductSkeleton } from "./product-skeleton";

interface Props {
  items: Product[];
  className?: string;
}

export const ProductList: React.FC<Props> = ({ items }) => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) {
    return (
      <div className='grid grid-cols-3 gap-x-5 gap-y-10'>
        {[...Array(10)].map((i) => (
         <ProductSkeleton key={i} />
        ))}
      </div>
    );
  }
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='grid grid-cols-3 gap-x-5 gap-y-10'>
      {items.map((item, i) => (
        <ProductCard item={item} key={item.id} />
      ))}
    </div>
  );
};
