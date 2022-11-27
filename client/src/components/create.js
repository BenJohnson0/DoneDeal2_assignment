import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./create.css"
 
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   email: "",
   password: "",
 });
 const navigate = useNavigate();
 
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
   e.preventDefault();
 
   
   const newPerson = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ name: "", email: "", password: "" });
   navigate("/");
 }
 
 
 return (
   <div class="container">
     <h3>Register</h3>
     <form onSubmit={onSubmit}>
       <div className="input-container ">
         <label htmlFor="name">Name</label><br></br>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="email">Email</label>
         <input
           type="email"
           className="form-control"
           id="email"
           value={form.email}
           onChange={(e) => updateForm({ email: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label htmlFor="password">Password</label><br></br>
         <input
           type="password"
           className="form-control"
           id="password"
           minlength="8"
           value={form.password}
           onChange={(e) => updateForm({ password: e.target.value })}
         />
       </div>

       <div className="form-group">
         <input
           id="submitBtn"
           type="submit"
           value="Create Account"
           className="btn btn-primary"
         />
       </div>
       
     </form>
     <p>Already have an account? Sign in <a href = "/account">here</a></p>
   </div>
 );
}


