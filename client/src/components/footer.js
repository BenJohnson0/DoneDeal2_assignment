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
            <div class = "googlemaps">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.180775147405!2d-6.2894665841611275!3d53.357919579981456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670c02cb588d75%3A0xd288d4099c509cd6!2sTechnological%20University%20Dublin!5e0!3m2!1sen!2sie!4v1669068505156!5m2!1sen!2sie" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
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