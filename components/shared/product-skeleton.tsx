import React from "react";
import { Skeleton } from "../ui/skeleton";

export const ProductSkeleton: React.FC = () => {
  return (
    <div>
      <div>
        <Skeleton className='w-full h-[290px]' />
      </div>
      <div className='p-5'>
        <div className='flex flex-col gap-3'>
          <Skeleton className='w-2/3 h-6' />
          <div className='flex flex-col gap-2'>
            <Skeleton className='w-full h-3' />
            <Skeleton className='w-full h-3' />
            <Skeleton className='w-1/3 h-3' />
          </div>
        </div>
        <div className='flex items-center justify-between mt-5'>
          <Skeleton className='w-10 h-5' />
          <Skeleton className='w-24 h-8' />
        </div>
      </div>
    </div>
  );
};
