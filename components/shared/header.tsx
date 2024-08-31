import { Input } from "@/components/ui/input";
import { Container } from "./container";
import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import React, { Dispatch, SetStateAction } from "react";

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
          <div>
            <Button>
              <b>0 ₽</b>
              <span className='h-full w-[1px] bg-white/30 mx-3' />
              <div className='flex items-center gap-1'>
                <ShoppingCart strokeWidth={2} />
                <b>0</b>
              </div>
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
