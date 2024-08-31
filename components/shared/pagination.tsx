"use client";

import React from "react";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppDispatch } from "@/store/hooks";
import { useSelector } from "react-redux";
import { selectCurrentPage, selectMeta } from "@/store/selectors";
import { getProducts, setPage } from "@/store/slices/product-slice";

interface Props {
  className?: string;
  currentPage?: number;
  pageCount?: number;
}

export const Pagination: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const meta = useSelector(selectMeta);
  const currentPage = useSelector(selectCurrentPage);

  if (!meta) return null;

  const pageCount = meta.total_pages;

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
    dispatch(getProducts({ page, limit: 10 }));
  };

  return (
    <div className={cn("flex items-center gap-1 my-14", className)}>
      <Button
        className='p-0 w-10'
        variant='outline'
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <ChevronLeft className='h-4 w-4' />
      </Button>

      <div className='flex gap-1 mx-2'>
        {[...Array(pageCount)].map((_, i) => (
          <Button
            key={i}
            variant={currentPage === i + 1 ? "default" : "ghost"}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </Button>
        ))}
      </div>

      <Button
        className='p-0 w-10'
        variant='outline'
        disabled={currentPage === pageCount}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <ChevronLeft className='h-4 w-4 rotate-180' />
      </Button>
    </div>
  );
};
