import { useAppDispatch } from "@/store/hooks";
import { removeItem, updateQuantity } from "@/store/slices/cart-slice";

export const useCardActions = () => {
  const dispatch = useAppDispatch();

  const handleIncrease: (id: number, quantity: number) => void = (
    id,
    quantity
  ) => {
    if (quantity !== undefined) {
      dispatch(
        updateQuantity({
          id,
          quantity: quantity + 1,
          direction: "inc",
        })
      );
    }
  };

  const handleDecrease: (id: number, quantity: number) => void = (
    id,
    quantity
  ) => {
    if (quantity !== undefined && quantity > 1) {
      dispatch(
        updateQuantity({
          id,
          quantity: quantity - 1,
          direction: "dec",
        })
      );
    } else {
      dispatch(removeItem(id));
    }
  };

  return { handleIncrease, handleDecrease };
};
