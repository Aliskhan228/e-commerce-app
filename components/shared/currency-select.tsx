"use client";

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
import { useCurrencyContext } from '@/hook/useCurrencyContext';

interface Props {
  className?: string;
}

export const CurrencySelect: React.FC<Props> = ({ className }) => {
  const { currency, setCurrency } = useCurrencyContext();

  return (
    <div className={cn(className)}>
      <Select
        defaultValue='USD'
        value={currency}
        onValueChange={(value) => setCurrency(value as "USD" | "EUR" | "GBP")}
      >
        <SelectTrigger>
          <SelectValue placeholder='Select a currency' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='USD'>USD</SelectItem>
            <SelectItem value='EUR'>EUR</SelectItem>
            <SelectItem value='GBP'>GBP</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
