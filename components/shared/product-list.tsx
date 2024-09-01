"use client";

import React from "react";

import { ProductCard } from "./product-card";
import { Product } from "@/types/types";
import { selectError, selectLoading } from "@/store/selectors";
import { useSelector } from "react-redux";
import { ProductSkeleton } from "./product-skeleton";
import { Link } from "lucide-react";

interface Props {
  items: Product[];
  className?: string;
}

export const ProductList: React.FC<Props> = ({ items }) => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  if (loading) {
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10'>
        {[...Array(10)].map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    );
  }
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10'>
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />

        // <Link key={item.id} href={`/${item.id}`}>
        // </Link>
      ))}
    </div>
  );
};
