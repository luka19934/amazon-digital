import { useMemo } from "react";
import useLocalStorage from "./UseLocalStorage";

const useCart = () => {
  const [cart, setCart] = useLocalStorage("cart", []);

  const add = (newProduct) => {
    const cartItem = cart.find((item) => item.product.id === newProduct.id);
    if (cartItem) {
      cartItem.quantity++;
      setCart([...cart]);
    } else {
      setCart([...cart, { product: newProduct, quantity: 1 }]);
    }
  };

  const decrement = (productId) => {
    setCart(
      cart.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const remove = (productId) => {
    setCart(cart.filter((item) => item.product.id !== productId));
  };

  const totalPrice = useMemo(
    () =>
      cart.reduce(
        (total, item) => total + item.product.price * item.quantity,
        0
      ),
    [cart]
  );

  const numProducts = useMemo(
    () => cart.reduce((sum, product) => sum + product.quantity, 0),
    [cart]
  );

  return {
    cart,
    add,
    decrement,
    remove,
    totalPrice,
    numProducts,
  };
};

export default useCart;
