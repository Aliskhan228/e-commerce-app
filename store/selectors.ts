import { RootState } from "./store";

export const selectProducts = (state: RootState) => state.products.items;
export const selectMeta = (state: RootState) => state.products.meta;
export const selectLoading = (state: RootState) => state.products.loading;
export const selectError = (state: RootState) => state.products.error;
export const selectCurrentPage = (state: RootState) => state.products.currentPage;
