"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { CartProduct } from "@/types/types";
import { useAppDispatch } from "@/store/hooks";
import { removeItem, updateQuantity } from "@/store/slices/cart-slice";
import { Counter } from "./counter";

interface Props {
  item: CartProduct;
  className?: string;
}

export const CartItem: React.FC<Props> = ({ item, className }) => {
  const dispatch = useAppDispatch();

  const handleIncrease: () => void = () => {
    if (item.quantity !== undefined) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity + 1,
          direction: "inc",
        })
      );
    }
  };

  const handleDecrease: () => void = () => {
    if (item.quantity && item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
          direction: "dec",
        })
      );
    } else {
      dispatch(removeItem(item.id));
    }
  };

  return (
    <div className={cn("flex flex-col", className)}>
      <div>
        <img
          className='h-[250px] w-full rounded-lg'
          src={item.image}
          alt='product image'
        />
      </div>
      <div className='mt-2'>
        <h4 className='font-bold text-xl'>{item.title}</h4>
      </div>
      <Counter
        className='my-3'
        count={item.quantity}
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
      <span>{item.price} $</span>
    </div>
  );
};
