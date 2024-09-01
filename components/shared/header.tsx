"use client";

import { Input } from "@/components/ui/input";
import { Container } from "./container";
import { CartButton } from "./cart-button";

import React, { Dispatch, SetStateAction } from "react";
import { CurrencySelect } from "./currency-select";

interface Props {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

const Header: React.FC<Props> = ({ query, setQuery }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <header className='p-5'>
      <Container>
        <div className='flex items-center justify-between'>
          <Input
            className='w-1/3'
            placeholder='Search products by title'
            value={query}
            onChange={handleChange}
          />
          <div className="flex gap-10">
            <CurrencySelect />
            <CartButton />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
