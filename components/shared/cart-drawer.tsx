"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { CartItem } from "./cart-item";
import { useSelector } from "react-redux";
import { selectCart } from "@/store/selectors";
import { useAppDispatch } from "@/store/hooks";
import { clearItems } from "@/store/slices/cart-slice";
import { useCurrencyContext } from "@/context/currency-context";
import { formatPrice } from "@/utils/utils";

interface Props {
  className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  const dispatch = useAppDispatch();
  const { currency } = useCurrencyContext();
  const { items, totalPrice, totalQuantity } = useSelector(selectCart);
  const formattedPrice = formatPrice(totalPrice, currency);

  const clearCart: () => void = () => {
    dispatch(clearItems());
  };

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className='flex flex-col justify-between overflow-auto'>
        <SheetHeader>
          <SheetTitle className='mb-5'>
            <span className='font-bold'>{totalQuantity} products in cart</span>
          </SheetTitle>
          <div>
            {totalQuantity > 0 && (
              <span
                className='text-red-500 font-bold cursor-pointer'
                onClick={clearCart}
              >
                Clear cart
              </span>
            )}
          </div>
        </SheetHeader>

        <div className='flex flex-col gap-5 mt-3'>
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        <SheetFooter className='mt-10'>
          <div className='flex flex-col gap-4 w-full'>
            <div className='flex gap-2'>
              <span className='text-lg'>Total price:</span>
              <span className='text-lg'>{formattedPrice}</span>
            </div>
            <Button type='submit' className='w-full h-12 text-base'>
              Place an order
              <ArrowRight className='w-5 ml-2' />
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
