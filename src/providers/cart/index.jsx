import { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("@CartProducts")) || []
  );

  const setProductsOnCart = () => {
    localStorage.setItem("@CartProducts", JSON.stringify(cart));
  };

  useEffect(() => {
    setProductsOnCart();
  }, [setProductsOnCart()]);

  const addToCart = (item) => {
    // let quantity = 0;

    let teste = cart.find((product) => product.id === item.id);

    if (teste) {
      cart.forEach((element) => {
        if (element.id === teste.id) {
          element.amount += 1;
        }
      });
    } else {
      item.amount += 1;
    }

    return setCart([...cart, item]);
  };

  const removeFromCart = (id, index) => {
    const newCart = cart.filter((item, i) => {
      if (item.id === id) {
        return i !== index;
      } else {
        return item.id !== id;
      }
    });

    console.log(newCart);

    setCart(newCart);
    localStorage.setItem("@CartProducts", JSON.stringify(newCart));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
