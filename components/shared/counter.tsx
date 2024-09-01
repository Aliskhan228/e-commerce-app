"use client";

import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface Props {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
  className?: string;
}

export const Counter: React.FC<Props> = ({
  count,
  onIncrease,
  onDecrease,
  className,
}) => {
  return (
    <div className={cn('flex gap-3 items-center', className)}>
      <Button onClick={onDecrease}>-</Button>
      <b className='text-lg'>{count}</b>
      <Button onClick={onIncrease}>+</Button>
    </div>
  );
};
