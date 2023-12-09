import useLocalStorage from "./UseLocalStorage";

const useCart = () => {
  const [cart, setCart] = useLocalStorage("cart", []);

  const add = (productId) => {
    const newCart = [...cart];
    const index = cart.findIndex((product) => product.productId === productId);
    if (index >= 0) {
      newCart[index].quantity++;
    } else {
      newCart.push({ productId, quantity: 1 });
    }
    setCart(newCart);
  };

  return {
    cart,
    add,
    numProducts: cart.reduce((sum, product) => sum + product.quantity, 0),
  };
};

export default useCart;
