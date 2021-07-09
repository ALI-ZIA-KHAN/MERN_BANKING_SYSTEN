import React from 'react';
import {useEffect,useState} from 'react';
import {createContext} from 'react';
import {NavLink} from 'react-router-dom';
import Center_content from './Centrecontent';
import axios from 'axios'
import Transfer from '../components/Transfer';


const Tosend= createContext();
const Getrcv=createContext();


const Userlist=(props)=>(
  
  
    <tr>
    <td>{props.users.username}</td>
    <td>{props.users.phone}</td>
    <td>{props.users.balance}</td>
    <td>{props.users._id}</td>
  
    <td>
      <NavLink  iden={props.users._id} to={"/transfer/"+props.users._id+props.users.username}>Transact</NavLink>
    </td>

     

</tr>


)


function Usersall(){

    const [customer,setCustomer]=useState([]);


    axios.get('http://localhost:7789/users/').then((response)=>{
        // console.log(response.data);
        setCustomer(response.data);
   }).catch((err)=>{
     console.log(err);
   });

 const  cusList=()=> {
    return customer.map(currentcus => {

      // <Tosend value={currentcus.username}>
      return <Userlist users={currentcus}  key={currentcus._id}/>;
      // </Tosend>
    }
    )
}
   
  
    return(
        <>
           <div>
        <h3>List of ALL USERS</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Phone</th>
              <th>Balance</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            { cusList() }
          </tbody>
        </table>
      </div>
        </>
    )
 

}

export default Usersall;
export {Tosend,Getrcv};