import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (isInCart(item)) {
      const newCart = cart.reduce((accum, _item) => {
        if (item.id !== _item.id) {
          return accum.concat(_item);
        } else {
          return accum.concat({
            ...item,
            quantity: _item.quantity + quantity,
          });
        }
      }, []);
      setCart(newCart);
    } else {
      const newCart = [...cart, {...item, quantity}];
      setCart(newCart);
    }
  };

  //este useEffect lo dejo solo para mostrar lo que se agrega al carrito, después se saca.
  useEffect(() => {
    console.log(cart)
  }, [cart])

  const removeItem = (item) => {
    const newCart = cart.filter(_item => _item.id !== item.id);
    setCart(newCart);
  };

  const clear = () => setCart([])

  const isInCart = (item) => {
    return cart.some(_item => _item.id == item.id);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem, 
        clear
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
