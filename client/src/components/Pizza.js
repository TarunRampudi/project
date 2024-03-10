import React, { useState } from "react";
import { useParams } from "react-router-dom";
import fooditemsdata from "../fooditemsdata";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";

const MenuItem = () => {
  const { id } = useParams();
  const MenuItem = fooditemsdata[id];

  if (!MenuItem) {
    return <div>Menu item not found</div>;
  }

  const [quantity, setQuantity] = useState(1);
  const [varient, setVarient] = useState(MenuItem.varients[0]);

  const dispatch = useDispatch();

  const addtocart = () => {
    dispatch(addToCart(MenuItem, quantity, varient));
  };

  return (
    <div>
      <h1 onClick={() => console.log("h1 clicked!")}>{MenuItem.name}</h1>
      <img
        src={MenuItem.image}
        className="img-fluid"
        style={{ height: "200px", width: "300px" }}
        onClick={() => console.log("Image clicked!")}
      />
      <div className="flex-container">
        <div className="w-100">
          <p>
            <b>Varients</b>
          </p>
          <select value={varient} onChange={(e) => setVarient(e.target.value)}>
            {MenuItem.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="w-100">
          <p>
            <b>Quantity</b>
          </p>
          <select
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div>
          <h1>Price : {MenuItem.prices[0][varient] * quantity}</h1>
        </div>
        <div>
          <button className="btn btn-primary" onClick={addtocart}>
            Add to Cart
          </button>
       
        </div>
      </div>
    </div>
  );
};

export default MenuItem;