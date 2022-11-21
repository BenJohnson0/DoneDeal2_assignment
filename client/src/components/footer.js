import React, {Component} from "react";
import { NavLink } from "react-router-dom";
import './footer.css';

class Footer extends Component {
  render() {
    return (
        <div class = "footergrid-container">
          <div>
            <h2>DoneDeal2</h2>
            <h4>Central Quad, <br/>Technological University Dublin, Dublin 8</h4>
          </div>
          
          <div><ul>
          <li className="nav-item">
             <NavLink className="nav-link" to="/help">
               Help
             </NavLink>
          </li>

          <li className="nav-item">
             <NavLink className="nav-link" to="/buy">
               Buying
             </NavLink>
          </li>

          <li className="nav-item">
             <NavLink className="nav-link" to="/sell">
               Selling
             </NavLink>
          </li>

          <li className="nav-item">
             <NavLink className="nav-link" to="/account">
               Account
             </NavLink>
          </li>
            
            </ul></div>
        </div>
      );
    }
};
    
export default Footer;