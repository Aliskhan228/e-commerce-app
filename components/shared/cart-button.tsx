"use client";

import React from "react";
import { useSelector } from "react-redux";
import { selectCart } from "@/store/selectors";

import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { CartDrawer } from "./cart-drawer";
import { formatPrice } from "@/utils/utils";
import { useCurrencyContext } from "@/context/currency-context";

interface Props {
  className?: string;
}

export const CartButton: React.FC<Props> = () => {
  const { currency } = useCurrencyContext();
  const { totalPrice, totalQuantity } = useSelector(selectCart);
  const formattedPrice = formatPrice(totalPrice, currency);

  return (
    <CartDrawer>
      <Button>
        <b>{formattedPrice}</b>
        <span className='h-full w-[1px] bg-white/30 mx-3' />
        <div className='flex items-center gap-1'>
          <ShoppingCart strokeWidth={2} />
          <b>{totalQuantity}</b>
        </div>
      </Button>
    </CartDrawer>
  );
};
