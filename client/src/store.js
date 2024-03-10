import { combineReducers } from "redux";
import { thunk } from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";
import { getAllPizzasReducer } from "./reducers/pizzaReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { cartReducer } from "./reducers/cartReducer";
const finalReducer = combineReducers({
  getAllPizzasReducer: getAllPizzasReducer,
  CartReducer: cartReducer,
});

const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  CartReducer: {
    cartItems,
  },
};

const composeEnhancers = composeWithDevTools({});
const store = createStore(
  finalReducer,
  initialState,

  composeEnhancers(
    applyMiddleware(
      (store) => (next) => (action) => {
        thunk(store)(next)(action);
      }
    )
  )
);

export default store;