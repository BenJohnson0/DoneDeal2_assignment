import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "./account.css";
 
export default function Login() {
 const [form, setform] = useState({
   name: "",
   password: "",
   records: [],
 });
 const navigate = useNavigate();

 function updateForm(value) {
    return setform((prev) => {
      return { ...prev, ...value };
    });
  }
 
    async function loginattempt(e) {   
        const name = form.name;
        const password = form.pwd;
        const id = "637c9fee04a794aec1586adf";

        const response = await fetch(`http://localhost:5000/record/${id}`);
    
        if (!response.ok) {
          const message = `An error has occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
    
        const record = await response.json();
        if (!record) {
          window.alert(`Record with username ${name} not found`);
          navigate("/Login");
          return;
        }
        if (password !== record.password) {
           window.alert(`Incorrect password`);
           navigate("/Login");
           return;
        }
        
        setform({ name: "",password: "" });
        
        navigate("/Buy");
        
    
     }  
 
 return (
    <div className="form">
    <h2>Log in to continue</h2>
        <form>
              <div className="input-container">
                <label>Username </label>
                <input type="text" 
                       name="name" 
                       value={form.name}
                       onChange={(e) => updateForm({ name: e.target.value })}
                       required />
              </div>
              <div className="input-container">
                <label>Password </label>
                <input type="password"
                 minlength="6" 
                 name="pwd"
                 value={form.pwd}
                 onChange={(e) => updateForm({ password: e.target.value })}
                 required />
              </div>

              <p>Don't have an account? Sign up <a href = "/create">here</a></p>
              <div className="button-container">
                <input type="submit" onClick={loginattempt}></input>
              </div>
            </form>
          </div>
 );
}

