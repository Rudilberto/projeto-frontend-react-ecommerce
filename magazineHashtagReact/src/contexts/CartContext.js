import { createContext } from "react";
// Importação para criar contextos

export const CartContext = createContext(null); // dentro dos parenteses ficara o valor inicial

export const getAmountOfItemsInCart = (cartItemsObj) => {
  let amount = 0;
  for (const productId in cartItemsObj) {
    amount += cartItemsObj[productId];
  }
  return amount;
};
