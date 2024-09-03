"use client";

import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "@/store/selectors";

import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { CartDrawer } from "./cart-drawer";
import { formatPrice } from "@/utils/utils";
import { useCurrencyContext } from "@/hook/useCurrencyContext";

export const CartButton: React.FC = () => {
  const { currency } = useCurrencyContext();
  const { totalPrice, totalQuantity } = useSelector(selectCart);
  const formattedPrice = formatPrice(totalPrice, currency);

  return (
    <CartDrawer>
      <Button className='bg-transparent border-none text-black shadow-none hover:bg-transparent sm:bg-primary sm:hover:bg-primary sm:text-white'>
        <b className='hidden sm:inline'>{formattedPrice}</b>
        <span className='h-full w-[1px] bg-white/30 mx-3 hidden sm:inline' />
        <div className='flex items-center gap-1'>
          <ShoppingCart strokeWidth={2} />
          <b>{totalQuantity}</b>
        </div>
      </Button>
    </CartDrawer>
  );
};
