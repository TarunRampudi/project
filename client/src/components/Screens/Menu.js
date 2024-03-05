import React from "react";
import pizzas from "../../fooditemsdata";
import Pizza from "../Items";
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
