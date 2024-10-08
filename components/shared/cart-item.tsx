"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { CartProduct } from "@/types/types";
import { Counter } from "./counter";
import { useCardActions } from "@/hooks/useCardActions";
import { useCurrencyContext } from "@/hooks/useCurrencyContext";
import { formatPrice } from "@/utils/utils";

interface Props {
  item: CartProduct;
  className?: string;
}

export const CartItem: React.FC<Props> = ({ item, className }) => {
  const { handleIncrease, handleDecrease } = useCardActions();
  const { currency } = useCurrencyContext();

  const formattedPrice = formatPrice(item.price, currency);

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
        onIncrease={() => handleIncrease(item.id, item.quantity)}
        onDecrease={() => handleDecrease(item.id, item.quantity)}
      />
      <span>
        {formattedPrice}
      </span>
    </div>
  );
};
