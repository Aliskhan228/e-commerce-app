"use client";

import React from "react";

import { cn } from "@/lib/utils";
import { Plus, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Product } from "@/types/types";
import { formatPrice, truncateText } from "@/utils/utils";
import { useAppDispatch } from "@/store/hooks";
import { addItem, removeItem, updateQuantity } from "@/store/slices/cart-slice";
import { useSelector } from "react-redux";
import { selectQuantityById } from "@/store/selectors";
import { RootState } from "@/store/store";
import { Counter } from "./counter";
import { useCurrencyContext } from "@/context/currency-context";
import Link from "next/link";

interface Props {
  item: Product;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({ item, className }) => {
  const dispatch = useAppDispatch();
  const quantity = useSelector((state: RootState) =>
    selectQuantityById(state, item.id)
  );
  const { currency } = useCurrencyContext();

  const formattedPrice = formatPrice(item.price, currency);
  const truncatedText: string = truncateText(item.description, 100);

  const addToCart: () => void = () => {
    dispatch(addItem(item));
  };

  const handleIncrease: () => void = () => {
    if (quantity !== undefined) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: quantity + 1,
          direction: "inc",
        })
      );
    }
  };

  const handleDecrease: () => void = () => {
    if (quantity && quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: quantity - 1,
          direction: "dec",
        })
      );
    } else {
      dispatch(removeItem(item.id));
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col border-slate-300 border hover:shadow-xl transition-shadow duration-300",
        className
      )}
    >
      <div>
        <img src={item.image} alt='product image' />
      </div>
      <div className='flex flex-1 flex-col justify-between p-5'>
        <div className='flex flex-col gap-3'>
          <h4 className='font-bold text-2xl'>{item.title}</h4>
          <p className='text-[16px]'>{truncatedText}</p>
        </div>
        <div className="mt-5">
          <div className='flex items-center gap-2 mt-3'>
            <Star fill='#ffea00' color='#ffea00' className='h-4 w-4' />
            {item.rating}
          </div>
          <div className='flex items-center justify-between mt-5'>
            <span className='flex gap-2 text-lg'>
              <b>{formattedPrice}</b>
            </span>
            {quantity ? (
              <Counter
                count={quantity}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
              />
            ) : (
              <Button className='flex gap-2' onClick={addToCart}>
                <Plus className='text-white h-4 w-4' />
                Add
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
