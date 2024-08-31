import React from "react";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { Product } from "@/store/slices/product-slice";

interface Props {
  item: Product;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({ item, className }) => {
  return (
    <div className={cn(className)}>
      <div>
        <img src={item.image} alt='' />
        <h4>{item.title}</h4>
        <p>{item.description}</p>
        <div>
          <span>
            <b>{item.price}</b>
						{item.currency}
          </span>
          <Button>
            <Plus />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
};
