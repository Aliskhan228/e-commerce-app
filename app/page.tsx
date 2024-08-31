"use client";

import { Container } from "@/components/shared/container";
import Header from "@/components/shared/header";
import { Pagination } from "@/components/shared/pagination";
import { ProductList } from "@/components/shared/product-list";
import { useAppDispatch } from "@/store/hooks";
import {
  selectCurrentPage,
  selectProducts,
} from "@/store/selectors";
import { getProducts } from "@/store/slices/product-slice";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const dispatch = useAppDispatch();
  const items = useSelector(selectProducts);
  const currentPage = useSelector(selectCurrentPage);

  useEffect(() => {
    dispatch(getProducts({ page: currentPage, limit: 10 }));
  }, [dispatch, currentPage]);

  return (
    <>
      <Header />
      <Container>
        <ProductList items={items} />
        <Pagination />
      </Container>
    </>
  );
}
