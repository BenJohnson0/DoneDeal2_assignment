import React, { useState } from "react";
import { carData } from "./carModels";
import "./buy.css";

export const Buy = () => {

  const [searchedArray, setSearchedArray] = React.useState(carData);
  const [searchString, setSearchString] = useState("");

  //change the output given the current search query
  React.useEffect(() => {
    if(searchString.length === 0){
      setSearchedArray(carData)
    } else {
      const searchedObjects = []
      
      carData.forEach((carObj, index) => {
        Object.values(carObj).every((onlyValues, valIndex) => {
          if(onlyValues.toLowerCase().includes(searchString.toLowerCase())){
            searchedObjects.push(carObj)
            return;
          }
        })
      })
      setSearchedArray(searchedObjects) 
    }
  }, [searchString])

  return (
    <div id = "carcontainer" classname = "carContainer">

        <h2>Cars for sale</h2>
        <h3>Search by name</h3>
        
        <div className="searchbar">
        <p>
        <input
          type="text"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          placeholder="Search here..."
        />
        </p>
      
      <pre>
      {searchedArray.map( (searchedArray) => (
                <Carad
                name = {searchedArray.name} 
                Engine = {searchedArray.Engine}                 
                Reg = {searchedArray.Reg} 
                Colour = {searchedArray.Colour}
                Price = {searchedArray.Price}
                Image = {searchedArray.Image} />
        ))}
      </pre>
      </div>
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


