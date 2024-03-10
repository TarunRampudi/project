import React from "react";

export default function Restaurants() {
  return (
    <div>
      <h1 style={{ marginTop: "40px" }}>
        Available Restaurants In Your Location!
      </h1>
      <div className="restaurant-row">
        {[
          { 
            name: "kings cuisine", 
            place: "Vijayawada", 
            image: 
              "https://th.bing.com/th/id/OIP.ySmXfFmouXbhV9LB4JEt2wHaFj?w=237&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", 
          }, 
        { 
            name: "paradise ", 
            place: "Guntur", 
            image: 
              "https://th.bing.com/th/id/OIP.WkyCNwAleXNOv6q765vq5AHaEK?w=321&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", 
          },
        { 
            name: "chutneys", 
            place: "Hyderabad", 
            image: 
              "https://th.bing.com/th/id/OIP.Afe9rDOOwYyRhbRWRvn3FwAAAA?w=208&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7", 
          },
        { 
            name: "Raghavendra Pure Veg", 
            place: "Hyderabad", 
            image: 
              "https://th.bing.com/th/id/OIP.3h03JVrIW1o0ilLqqqcoGQHaFj?w=247&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            },
        { 
            name: "Udipi Pure Veg", 
            place: "Banglore", 
            image: 
              "https://th.bing.com/th/id/OIP.VQ9KJTjX8T1zZfG_NsPQcwHaFj?w=247&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            },
        { 
            name: "Juice Bar", 
            place: "Guntur", 
            image: 
              "https://th.bing.com/th/id/OIP.S1jpNz-unNuLnRfB1ht4qwHaEu?w=267&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            },
        {
            name: "Lassi Shop", 
            place: "Banglore", 
            image: 
                "https://th.bing.com/th/id/OIP.byJ_PnK2NH9dZaKKqY2rBgHaFj?w=267&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7",
            }
        ].map((restaurant, index) => (
          <div key={index} className="restaurant-container">
            <img src={restaurant.image} alt={restaurant.name} />
            <h2>{restaurant.name}</h2>
            <p>{restaurant.place}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
