import pizzas from "../../fooditemsdata";
import Pizza from "../Items";
import React, { useState } from "react";

export default function Homescreen() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPizzas = pizzas.filter((pizza) =>
    pizza.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="row">
        <div
          className="col-md-6"
          style={{
            marginLeft: "410px",
          }}
        >
          <input
            type="text"
            placeholder="Search for foods"
            onChange={handleSearchChange}
            className="form-control mt-5"
          />
        </div>
      </div>
      <div className="row mt-5">
        {filteredPizzas.map((pizza) => {
          return (
            <div className="col-md-2">
              <div>
                <Pizza pizza={pizza} />
              </div>
            </div>
          );
        })}
        <div>
          {/* Your existing code */}
          <footer className="bg-light text-black mt-5 p-3">
            <p>&copy; 2024 Foodies. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
