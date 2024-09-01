import { CartProduct } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: CartProduct[];
  totalPrice: number;
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.totalPrice += newItem.price;
      } else {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }

      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number; direction: string }>
    ) {
      const item = state.items.find((item) => item.id === action.payload.id);
      const direction = action.payload.direction;
      if (item) {
        item.quantity = action.payload.quantity;

        if (direction === "inc") {
          state.totalQuantity++;
          state.totalPrice += item.price;
        } else if (direction === "dec") {
          state.totalQuantity--;
          state.totalPrice -= item.price;
        }
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity--;
        state.totalPrice -= existingItem.price;
      }

      // const id = action.payload;
      // const existingItem = state.items.find((item) => item.id === id);

      // if (existingItem) {
      //   state.totalQuantity--;
      //   state.totalPrice -= existingItem.price;

      //   if (existingItem.quantity === 1) {
      //     state.items = state.items.filter((item) => item.id !== id);
      //   } else {
      //     existingItem.quantity--;
      //     existingItem.totalPrice -= existingItem.price;
      //   }
      // }
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addItem, updateQuantity, removeItem, clearItems } =
  cartSlice.actions;

export default cartSlice.reducer;
