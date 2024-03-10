import React, { useState } from "react";

export default function Pizza({ pizza }) {
  const [quantity, setquantity] = useState(1);
  const [varients, setVarients] = useState("small");

  return (
    <div
      style={{ marginTop: "10px" }}
      className="shadow-lg p-3 mb-5 bg-white rounded"
    >
      <h3>{pizza.name}</h3>
      <img
        src={pizza.image}
        className="img-fluid"
        alt="pizza"
        style={{ height: "200px", width: "3 00px" }}
      />
      <div className="flex-container">
        <div className=" m-1 w-100">
          <p>Varients</p>
          <select
            className="form-control"
            value={varients}
            onChange={(e) => {
              setVarients(e.target.value);
            }}
          >
            {pizza.varients.map((varients) => {
              return <option value={varients}>{varients}</option>;
            })}
          </select>
        </div>
        <div className=" m-1 w-100">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="m-1 w-100">
          <h3 className="mt-1">
            Price :{pizza.prices[0][varients] * quantity}₹
          </h3>
        </div>
        <div className="m-1 w-100">
          <button className="buttons">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
}
