import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item)) {
      const newCart = cart.reduce((accum, _item) => {
        if (item.id !== _item.id) {
          return accum.concat(_item);
        } else {
          const sizeIndex = _item.sizes.findIndex(
            (size) => size.id === item.size
          );
          const sizes = [..._item.sizes];
          if (sizeIndex !== -1) {
            sizes[sizeIndex].quantity += quantity;
          } else {
            sizes.push({
              id: item.size,
              quantity,
            });
          }
          return accum.concat({
            ...item,
            sizes,
          });
        }
      }, []);
      setCart(newCart);
    } else {
      const sizes = [
        {
          id: item.size,
          quantity,
        },
      ];
      const newCart = [
        ...cart,
        {
          ...item,
          sizes,
        },
      ];
      setCart(newCart);
    }
  };

  const getItemInitialCount = (itemId, sizeId) => {
    let initial = 0;

    const item = cart.find((item) => item.id === itemId);
    if (item) {
      const size = item.sizes.find((size) => size.id === sizeId);
      if (size) {
        initial = size.quantity;
      }
    }

    return initial;
  };

  const removeItem = (item) => {
    const newCart = cart.filter((_item) => _item.id !== item.id);
    setCart(newCart);
  };

  const clear = () => setCart([]);

  const isInCart = (item) => {
    return cart.some((_item) => _item.id === item.id);
  };

  const numberOfItems = () => {
    return cart
      .flatMap((item) => item.sizes)
      .reduce((acc, item) => acc + item.quantity, 0);
  };

  const isEmpty = () => {
    return numberOfItems() === 0;
  };

  const totalAmount = () => {
    const totalItemsAndPrice = cart.map((item) => {
      const quantity = item.sizes.reduce((acc, size) => acc + size.quantity, 0);
      return { quantity, price: item.price };
    });

    return totalItemsAndPrice.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        getItemInitialCount,
        removeItem,
        clear,
        numberOfItems,
        isEmpty,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
