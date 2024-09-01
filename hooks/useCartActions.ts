import { useAppDispatch } from "@/store/hooks";
import { addItem, removeItem, updateQuantity } from "@/store/slices/cart-slice";
import { Product } from "@/types/types";

export const useCartActions = () => {
  const dispatch = useAppDispatch();

  const addToCart = (item: Product) => {
    dispatch(addItem(item));
  };

  const handleIncrease = (quantity: number) => {
    if (quantity !== undefined) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: quantity + 1,
          direction: "inc",
        })
      );
    }
  };

  const handleDecrease: () => void = () => {
    if (quantity && quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: quantity - 1,
          direction: "dec",
        })
      );
    } else {
      dispatch(removeItem(item.id));
    }
  };
};
