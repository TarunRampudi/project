// cartActions.js
import { ADD_TO_CART } from "../constants/cartConstants";
import { useAppDispatch } from "./useDispatch";

export const addToCart = (product, quantity, varient) => {
  const dispatch = useAppDispatch();
  const cartItems = useSelector((state) => state.CartReducer.cartItems);
  
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

  localStorage.setItem("cartItems", JSON.stringify([...cartItems, cartItem]));
};