import React, { useState } from 'react'
import ReactDOM from "react-dom/client";
const Apifetch = () => {
  // function Car(make, model, year) {
  //   this.make = make;
  //   this.model = model;
  //   this.year = year;
  //   this.setMiles = function (miles) {
  //     this.miles = miles
  //     return miles;
  //   }
  // }

  // const car1 = new Car('Toyota', 'Prius', 2016);
  // const car2 = new Car('Hyundai', 'Sonata', 2018);

  function FavoriteColor() {
    const [color, setColor] = useState("red");

  
    return (
      <div>
        <h1>My favorite color is {color}!</h1>
        <button
          type="button"
          onClick={() => setColor("blue")}
        >Blue</button>
        <button
          type="button"
          onClick={() => setColor("red")}
        >Red</button>
      </div>
    )
  }
}
export default Apifetch