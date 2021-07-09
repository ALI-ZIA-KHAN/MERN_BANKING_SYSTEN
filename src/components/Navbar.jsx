import React from 'react';
import {NavLink} from 'react-router-dom';


function Navbar() {
    return (
      <>
      <div className="navdiv">
          <div className="logodiv">
              <img src="https://picsum.photos/200" alt="" className="logopic" />
          </div>
          <div className="navuldiv">
              <ul className="listitems">
                  <li><NavLink exact activeClassName="active_class" to="/about"> About</NavLink></li>
                  <li><NavLink  exact activeClassName="active_class" to="/contact">Contact Us</NavLink></li>
              </ul>
              
          </div>

      </div>
      </>
    );
}

  
  export default Navbar;