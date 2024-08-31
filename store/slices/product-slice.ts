import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../lib/api";
import { Product } from "@/types/product";
import { MetaData } from "@/types/metadate";

interface ProductState {
  items: Product[];
  meta: MetaData | null;
  loading: boolean;
  error: string | null;
  currentPage: number;
}

interface ProductsResponse {
  items: Product[];
  meta: MetaData;
}

const initialState: ProductState = {
  items: [],
  meta: null,
  loading: true,
  error: null,
  currentPage: 1,
};

export const getProducts = createAsyncThunk<
  ProductsResponse,
  { page: number; limit: number }
>("products/getProducts", async ({ page, limit }) => {
  const response = await axios.get("/products", {
    method: "GET",
    params: {
      page,
      limit,
    },
  });
  return response.data;
});

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.items = action.payload.items;
      state.meta = action.payload.meta;
      state.loading = false;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to load products";
    });
  },
});

export const { setPage } = productSlice.actions;

export default productSlice.reducer;
