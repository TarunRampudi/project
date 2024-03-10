import React from "react";
import pizzas from "../../fooditemsdata";
import Pizza from "../Items";
import React from 'react'
import pizzas from '../../fooditemsdata'
import Pizza from '../Pizza'
export default function itemsscreen() {
  return (
    <div>
      <div className="row">
        {pizzas.map((pizza) => {
          return (
            <div className="col-md-2">
              <div>
                <Pizza pizza={pizza} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}