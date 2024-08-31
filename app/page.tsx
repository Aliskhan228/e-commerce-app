"use client";

import { Container } from "@/components/shared/container";
import Header from "@/components/shared/header";
import { ProductList } from "@/components/shared/product-list";
import { useAppDispatch } from "@/store/hooks";
import { products } from "@/store/selectors";
import { getProducts } from "@/store/slices/product-slice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const dispatch = useAppDispatch();
  const items = useSelector(products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      <Header />
      <Container>
        <ProductList items={items} />
      </Container>
    </>
  );
}
