import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import "./edit.css";
 
export default function Edit() {
 const [form, setForm] = useState({
   name: "",
   email: "",
   password: "",
   records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 

 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
   const editedPerson = {
     name: form.name,
     email: form.email,
     password: form.password,
   };
 
   await fetch(`http://localhost:5000/update/${params.id}`, {
     method: "POST",
     body: JSON.stringify(editedPerson),
     headers: {
       'Content-Type': 'application/json'
     },
   });
 
   navigate("/");
 }
 
 return (
   <div className="updatedivcontainer">
     <h3>Update User</h3>
     <form onSubmit={onSubmit}>
       <div className="updateform-group">
         <label htmlFor="name">Name: </label>
         <input
           type="text"
           className="updateform-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>

       <div className="updateform-group">
         <label htmlFor="email">Email: </label>
         <input
           type="email"
           className="updateform-control"
           id="email"
           value={form.email}
           onChange={(e) => updateForm({ email: e.target.value })}
         />
       </div>

       <div className="updateform-group">
         <label htmlFor="password">Password: </label>
         <input
           type="password"
           className="updateform-control"
           id="password"
           value={form.password}
           onChange={(e) => updateForm({ password: e.target.value })}
         />
       </div>
       <br />
 
       <div className="updateform-group">
         <input
           type="submit"
           value="Update Record"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}

