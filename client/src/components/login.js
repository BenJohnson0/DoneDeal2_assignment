import React, { useState } from "react";
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

    async function onSubmit(e) { 
        
        setform({ name: "",password: "" });

        const name = form.name;
        const password = form.password;
        const id = "637c9fee04a794aec1586adf";

        const response = await fetch(`http://localhost:5000/record/${id}`);
        
        //if there is an error with the response
        if (!response.ok) {
          const message = `An error has occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
    
        //REMOVE BEFORE DEMO
        const record = await response.json();
        window.alert(`Record is ${record.name} and ${record.password}`);

        //if record isnt found
        if (!record) {
          window.alert(`Record with username ${name} not found`);
          navigate("/login");
          return;
        }

        //incorrect details
        if ((password !== record.password) && (name !== record.name)) {
           window.alert(`Invalid details, try again.`);
           navigate("/login");
           return;
        }

        //wrong name
        if ((password === record.password) && (name !== record.name)) {
          window.alert(`Incorrect name, try again.`);
          navigate("/login");
          return;
       }

        //wrong password
        if ((password !== record.password) && (name === record.name)) {
         window.alert(`Incorrect password, try again.`);
         navigate("/login");
         return;
       }

        //correct details
        if ((password === record.password) && (name === record.name)) {
            window.alert(`Login successful.`);
            navigate("/account");

            this.setState((state) => {
            return {
                isLoggedIn: !state.isLoggedIn,
            };
            });

            navigate("/account");
            return;
        }    
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
                    name="password"
                    value={form.password}
                    onChange={(e) => updateForm({ password: e.target.value })}
                    required />
                </div>

                <p>Don't have an account? Sign up <a href = "/create">here</a></p>
                <div className="button-container">
                    <input type="submit" onClick={onSubmit}></input>
                </div>
            </form>
        </div>
 );
}
