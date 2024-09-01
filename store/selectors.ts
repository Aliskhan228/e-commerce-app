import { RootState } from "./store";

export const selectProducts = (state: RootState) => state.products.items;
export const selectMeta = (state: RootState) => state.products.meta;
export const selectLoading = (state: RootState) => state.products.loading;
export const selectError = (state: RootState) => state.products.error;
export const selectCurrentPage = (state: RootState) =>
  state.products.currentPage;
export const selectCart = (state: RootState) => state.cart;
export const selectQuantityById = (
  state: RootState,
  productId: number
): number | undefined => {
  const item = state.cart.items.find((item) => item.id === productId);
  return item ? item.quantity : undefined;
};
