import React from "react";
import { carData } from "./carModels";
import "./cars.css";

export const Cars = () => {
  return (
    <div classname = "carContainer">
        <HomePageHeader/>
        
        {carData.map((data, key) => {
          return ( 
            <div key={key}>
                <Car
                key={key}
                name = {data.name} 
                Engine = {data.Engine}                 
                Reg = {data.Reg} 
                Colour = {data.Colour}
                Price = {data.Price} />
            </div>
          );
        })}
      </div>
  );
};

const HomePageHeader = () => {
    return (
      <div>
      <header className="header">
        <h2>Cars for sale</h2>
      </header>

      <div className = "carheaders">
        <div>Car Make</div>
        <div>Engine Size</div>
        <div>Registration</div>
        <div>Colour</div>
        <div>Price</div>
      </div>
      </div>
    );
  };

const Car = ({ name, Engine, Reg, Colour, Price }) => {
    if (!name) return <div />;
    return (
        <table>
          <tbody>
            <tr>
              <td>
                <h5>{name}</h5>
              </td>
              <td>
                <h5>{Engine}</h5>
              </td>
              <td>
                <h4>{Reg}</h4>
              </td>
              <td>
                <p>{Colour}</p>
              </td>
              <td>
                <p>{Price}</p>
              </td>
            </tr>
          </tbody>
        </table>
    );
  };