import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Plus, Star } from "lucide-react";
import { Button } from "../ui/button";
import { Product } from "@/types/product";
import { currencySymbols, truncateText } from "@/utils/utils";

interface Props {
  item: Product;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({ item, className }) => {
  const [count, setCount] = useState<number>(0);

  const truncatedText: string = truncateText(item.description, 100);
  const currency = currencySymbols[item.currency.toLowerCase()];

  const addToCart: () => void = () => {
    setCount(count + 1);
  };

  return (
    <div
      className={cn(
        "flex flex-col justify-between hover:shadow-xl transition-shadow duration-300",
        className
      )}
    >
      <div>
        <img src={item.image} alt='' />
      </div>
      <div className='p-5'>
        <div className='flex flex-col gap-3'>
          <h4 className='font-bold text-2xl'>{item.title}</h4>
          <p className='text-[16px]'>{truncatedText}</p>
        </div>
				<div className="flex items-center gap-2 mt-3">
					<Star fill="#ffea00" color="#ffea00" className="h-4 w-4" />
					{item.rating}
				</div>
        <div className='flex items-center justify-between mt-5'>
          <span className='flex gap-2 text-lg'>
            <b>{item.price}</b>
            {currency}
          </span>
          <Button className='flex gap-2' onClick={addToCart}>
            <Plus className='text-white h-4 w-4' />
            {count > 0 ? count : "Add"}
          </Button>
        </div>
      </div>
    </div>
  );
};
