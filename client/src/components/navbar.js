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

       <li className="mobilenavitem">
             <NavLink className="nav-link" to="/buy">
               Buy
             </NavLink>
        </li>
        <li className="mobilenavitem">
             <NavLink className="nav-link" to="/sell">
               Sell
             </NavLink>
        </li>	

        <li id = "account" className="nav-item">
             <NavLink className="mobilenavitem" to="/account">
                  <i id = "accounticon" class="fa fa-user"></i>
             </NavLink>
        </li>

       
 
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

             <li className="nav-item">
             <NavLink className="nav-link" to="/login">
               login
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