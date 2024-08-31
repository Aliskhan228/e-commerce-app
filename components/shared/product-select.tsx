import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

interface Props {
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}

export const ProductSelect: React.FC<Props> = ({
  sort,
  setSort,
  className,
}) => {
  return (
    <div className={cn(className)}>
      <Select value={sort} onValueChange={(value) => setSort(value)}>
        <SelectTrigger className='w-[180px]'>
          <SelectValue placeholder='Sort by' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='price'>Price</SelectItem>
            <SelectItem value='rating'>Rating</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
