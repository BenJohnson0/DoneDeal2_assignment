import React from "react";
import { carData } from "./carModels";
import "./buy.css";




export const Buy = () => {
  return (

    <div id = "carcontainer" classname = "carContainer">

        <h2>Cars for sale</h2>

        <h3>Search for a car</h3>

        <div className="searchbar">
          
          <input id = "searchbar" placeholder="Search User"/>
          <button onClick={window['search_cars']}>Search</button>
            
        </div>

        {carData.map((data, key) => {
          return ( 
            <div key={key}>
                <Carad
                key={key}
                name = {data.name} 
                Engine = {data.Engine}                 
                Reg = {data.Reg} 
                Colour = {data.Colour}
                Price = {data.Price}
                Image = {data.Image} />
            </div>
          );
        })}
      </div>
  );
};

export default Buy;

const Carad = ({ name, Engine, Reg, Colour, Price, Image }) => {
    if (!name) return <div />;
    return (
    
    <div class = "ad">
        <img src = {Image} alt=''></img>
        <h4> {name}</h4>
        <hr></hr>
        <h5>{Engine} litre</h5>
        <h5>{Price}</h5>
        <h5>{Colour}</h5>
        <button><i className="fa fa-heart"></i></button>
    </div>
    
    );
};


