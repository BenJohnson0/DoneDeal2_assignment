import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
import "./navbar.css";
 
export default function Navbar() {
 return (
   <div class="navbar">
     <nav className="navbar navbar-expand-lg">
       <NavLink className="navbar-brand" to="/"> 
       <h1 id="title">Done<b>Deal</b>2</h1>
       </NavLink>

       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
        
            <li className="nav-item">
             <NavLink className="nav-link" to="/buy">
               Buy
             </NavLink>
             </li>

             <li className="nav-item">
             <NavLink className="nav-link" to="/sell">
               Sell
             </NavLink>
             </li>	

            { /* REMOVE BEFORE DEMO */ }
             <li className="nav-item" class="search-container">
             <NavLink className="nav-link" to="/users">
               USERS
             </NavLink>
             </li>

             <li id = "account" className="nav-item">
             <NavLink className="nav-link" to="/account">
                  <i id = "accounticon" class="fa fa-user"></i>
             </NavLink>
             </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}