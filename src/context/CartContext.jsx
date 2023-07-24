/**
 * The above code is a React component that provides a CartContext for managing a shopping cart in a
 * React application.
 */
/* eslint-disable react/prop-types */
import {createContext, useState} from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  // eslint-disable-next-line no-unused-vars
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    let isInCart = isInCart(item.id);
    if (isInCart === true) {
      let foundIndex = cart.findIndex((elem) => elem.id === item.id);
      cart[foundIndex].quantity += 1;
      setCart(cart);
    } else {
      setCart([...cart, item]);
    }
  };

  const deleteFromCart = (id) => {
    console.log("Se ejecuto el deleteFromCart");
    let newArray = cart.filter((elem) => elem.id !== id); //check this
    setCart(newArray);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    let result = cart.some((elem) => elem.id === id);
    return result;
  };

  //esto es para el total del carrito, teniendo en cuenta las quantity de cada producto en la lista del cart
  const getTotalPrice = () => {
    // eslint-disable-next-line no-unused-vars
    let total = cart.reduce((acc, elem) => {
      return acc + elem.price * elem.quantity;
    }, 0);
  };

  // esta se usa para el numerito del cart.
  const getTotalQuantity = () => {
    // eslint-disable-next-line no-unused-vars
    let total = cart.reduce((acc, elem) => {
      return acc + elem.quantity;
    });
  };

  const getQuantityById = (id) => {
    const product = cart.find((elem) => elem.id === id);
    /* The `product?.quantity` is using the optional chaining operator (`?.`) to access the
    `quantity` property of the `product` object. */
    return product?.quantity;
  };

  let data = {cart, addToCart, deleteFromCart, clearCart, isInCart, getTotalPrice, getTotalQuantity, getQuantityById};

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};
export default CartContextProvider;
