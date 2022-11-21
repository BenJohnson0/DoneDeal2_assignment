import React, {useState} from 'react'


const SearchBar = () => {

 const [searchInput, setSearchInput] = useState("");

 const cars = [

  { make: "Honda", model: "Accord" },
  { make: "Ford", model: "Pickup" },
  { make: "Honda", model: "Civic" },
  { make: "Toyota", model: "Camry" },
  { make: "Toyota", model: "Corolla" },
  { make: "Nissan", model: "Altima" },
  { make: "Peugeot", model: "308" },
  { make: "Volkswagen", model: "Golf" },
  { make: "Ford", model: "Mustang" },
  { make: "Mercedes", model: "A-Class" },

];

const handleChange = (e) => {
  e.preventDefault();
  setSearchInput(e.target.value);
};

if (searchInput.length > 0) {
    cars.filter( (car) => {
    return cars.name.match(searchInput);
});
}

return <div>

<input
   type="search"
   placeholder="Search here"
   onChange={handleChange}
   value={searchInput} />



{cars.map((car, index) => {

<div>
  <tr>
    <td>{car.make}</td>
    <td>{car.model}</td>
  </tr>
</div>

})}

</div>


};

export default SearchBar;