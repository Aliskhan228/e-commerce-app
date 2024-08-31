import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../lib/api";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  rating: number;
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    const response = await axios.get<Product[]>("/products");
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;
