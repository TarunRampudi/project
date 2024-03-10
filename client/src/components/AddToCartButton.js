// AddToCartButton.js
import React from "react";
import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../constants/cartConstants";

const AddToCartButton = ({ product, quantity, varient }) => {
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    const cartItem = {
      name: product.name,
      _id: product._id,
      image: product.image,
      price: product.prices[0][varient],
      quantity,
      varient,
    };

    dispatch({
      type: ADD_TO_CART,
      payload: cartItem,
    });

    localStorage.setItem("cartItems", JSON.stringify([...cartItem, cartItem]));
  };

  return (
    <button onClick={addToCartHandler}>
      Add to Cart
    </button>
  );
};

export default AddToCartButton;