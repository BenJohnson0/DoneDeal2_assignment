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
      <header className="header">
        <h2>Cars for sale</h2>
      </header>
    );
  };

const Car = ({ name, Engine, Reg, Colour, Price }) => {
    if (!name) return <div />;
    return (
      <table className="carsTable">
        <tbody>
          <tr>
            <td className="tdElement">
              <h5>{name}</h5>
            </td>
            <td className="tdElement">
              <h5>{Engine}</h5>
            </td>
            <td className="tdElement">
              <h4>{Reg}</h4>
            </td>
            <td className="tdElement">
              <p>{Colour}</p>
            </td>
            <td className="tdElement">
              <p>{Price}</p>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };