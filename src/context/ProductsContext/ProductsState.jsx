import React, { createContext, useReducer } from "react";
import ProductsReducer from "./ProductsReducer";
import axios from "axios";

const initialState = {
  products: [],
  cart: cart || [],
};

export const ProductsContext = createContext(initialState);

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductsReducer, initialState);

  const getProducts = async () => {
    try {
      const res = await axios.get("http://localhost:8080/products");

      const action = {
        type: "GET_PRODUCTS",
        payload: res.data,
      };
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };

  const addCart = (product) => {
    dispatch({
      type: "ADD_CART",
      payload: product,
    });
  };
  const clearCart = () => {
    dispatch({
      type: "CLEAR_CART"
    });
  };
  return (
    <ProductsContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        getProducts,
        addCart,
        clearCart
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
