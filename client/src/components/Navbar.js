import React from "react";
import { Button } from "bootstrap";
import { useSelector, useDispatch } from "react-redux";
import Restaurants from "./Restaurants";
export const useAppDispatch = () => useDispatch();
export const ADD_TO_CART = "ADD_TO_CART";

export default function Navbar() {
  const cartstate = useSelector((state) => state.cartReducer);

  const handleLogoutClick = (e) => {
    e.preventDefault();
    window.location.href = "/LoginForm";
  };
  //const handleCartClick = (e) =>{
    //e.preventDefault();
    //console.log({cartstate?.cartItems?.length || 0})
    //console.log("success");
  
  return (
    <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
      <div className="container-fluid">
        <h1 className="navbar-brand" style={{ fontSize: "45px" }}>
          Foodies
        </h1>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" style={{ marginLeft: "1000px" }}>
            <li className="nav-item">
              <a className="nav-link" href="./Restaurants">
                <h5>Restaurants </h5>
              </a>
            </li>
             <li className="nav-item">
              <a className="nav-link" href="/cart">
                <h5>Cart {cartstate?.cartItems?.length || 0} </h5>
              </a>
            </li>
            <li className="nav-item">
              <button
                className="nav-link active"
                aria-current="page"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

  }