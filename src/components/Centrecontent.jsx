import React from 'react';
import {NavLink} from 'react-router-dom'


function Center_content() {
    return(
        <>
     <div className="main_part">
         <div className="pic">
             <img src="https://th.bing.com/th/id/OIP.yNa80qwGkJJuQTOPGZnlSQHaHa?pid=ImgDet&rs=1" alt="" className="bigpic" />
         </div>
         <div className="mainbutton">
             <NavLink exact activeClassName="active_class" to="/view"><button>View All Customers</button></NavLink>
         </div>
     </div>
    <div className="footer">
        <p className="footernote">The Banking System developed by Ali &copy; 2020 The Sparks Foundation</p>
    </div>
   
     </>
   );
 }
export default Center_content;