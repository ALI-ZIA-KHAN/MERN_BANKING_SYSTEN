import React from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
import '../nav.css';
import {NavLink} from 'react-router-dom';
import {useEffect,useState} from 'react';



function View() {

const [show,setShow]=useState();


const handleChange=()=>{
  
  
    axios.get('http://localhost:7789/users/').then((response)=>{
       console.log(response.data[0]);
       setShow(response.data);
  }).catch((err)=>{
    console.log(err);
  })
  }
  // async function getData(){
    
  //   // const link='localhost:6000/user';
  //   // const res= await axios.get(link);
  //   // console.log(res.data)
  //   // setShow(res.data);




  //   axios.get({
  //             "link":'localhost:6000/user/',
  //             "method":"GET",
  //             "headers":{
  //                 "Content-Type":"application/json; charset=utf-8",
                  
                
  //             }
  //            })
  //           .then(response => {
  //             if (response.data.length > 0) {

  //               console.log(response.data); 
  //               setShow(response.data);
  //             }
  //           })
  //           .catch((error) => {
  //                     console.log(error);
  //                   })
              
  // }
  


// const link='http://localhost:6000/user/';
//  const  getData = ()=>{
//     axios.get({
//         "link":link,
//         "method":"GET",
//         "headers":{
//             "Content-Type":"application/json; charset=utf-8",
          
//         }
//        })
//       .then(response => {
//         if (response.data.length > 0) {
//           console.log(response.data);
         
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       })

//  }

  return (
    <>
  
     <h1>Hello from view all customers</h1>
     <button onClick={handleChange}> Show list of All customers</button>
      <button><NavLink exact activeClassName="active_class" to="/userlist"> Userlist</NavLink></button> 

     

     {/* {show.map((val, key) => {
       return (
         <div key={key}>
           <p>{val}</p>
         </div>
       )
     })

     } */}

    </>
  );

}
export default View;