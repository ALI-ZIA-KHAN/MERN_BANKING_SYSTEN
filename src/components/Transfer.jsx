import React from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import {useEffect,useState} from 'react';

import {useParams,useLocation} from 'react-router-dom';


function Transfer() {

  const location=useLocation(); 
  console.log(location) 
  
  const newloc=[location.pathname.slice(10,34)]
  const newsender=[location.pathname.slice(34)]
  console.log(newloc)
  console.log(newsender)
  
const [receiverlist,setReceiverlist] = useState({
  recv:"",
  reclist:[],
  newid:{}
  
});



const [sender,setSender]=useState({
  custid: newloc[0],
  sendername:newsender[0],
  receipentname:"",
  amount:"",
  


});

useEffect(() => {

axios.get('http://localhost:7789/users/').then(
  (res)=>{
    console.log(res.data)
    setReceiverlist({
      
      reclist: res.data.map(custi=>custi.username),
      newid:res.data.map(musti=>musti._id),
      
      recv:res.data[0].username
    })
  
  }).catch((err)=>{
    console.log(err)
  })

 

},[])


const onShow=(e)=>{
  console.log(e)
}
const onChangeUsername=(e)=>{
   
  
  // console.log(e.target.value)
  // var rpnm=e.target.value
  // receiverlist.recv=e.target.value
  console.log("***")
  // console.log( receiverlist.newid)

  
  console.log(e.target.value);


}









const inpEvn=(event)=>{
  // console.log(event.target.value);
  // console.log(event.target.name);
  const {value,name}=event.target;
    setSender((preValue)=>{
  // console.log(preValue);
return{
...preValue,

[name]:value,        
};

})



}

  
const onSubmits=(event)=>{
  event.preventDefault();
  alert('Form Submitted'); 
  
}
const transfer = {
  custid:sender.custid,
  sender:sender.sendername,
  receiver:sender.receipentname,
  amount:sender.amount,
  
 }

const onGo=()=>{

    
       console.log("==")
       console.log(transfer);
       
       axios.post('http://localhost:7789/transfers/add/', transfer)
       .then((res) => {
        console.log(res.data)
        console.log('Transferred')
    }).catch((error) => {
        console.log(error)

    });

  
    // window.location = '/userlist';


}
const onSave=()=>{
       
   axios.patch('http://localhost:7789/users/update/'+transfer.custid, JSON.stringify(transfer))
        .then((res) => {
        console.log(res.data)    //this is where I left , while I was working
        console.log('Updated it')
        }).catch((error) => {
        console.log(error)

});

}
  return (
    <>
  
   
   <div className="card text-center">

  <div className="card-header">
   Transaction Details
  </div>
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
   


    <div className="main_div">
   <form onSubmit={onSubmits} >       {/*   //now to show what user type in heading while having form tag which has its own/different bhvr */}
 <div>





  <input onChange={inpEvn} type="text" name="sendername" autoComplete='off' placeholder="Sender" value={sender.sendername}/>
  <br/>
  <br/>
  <br/>
  {/* <input onChange={inpEvn} type="text" name="receipentname" autoComplete='off' placeholder="Receiver" value={sender.receipentname}/>
  <br/>
  <br/>
  <br/> */}
  <input onChange={inpEvn} type="text" name="custid" autoComplete='off' placeholder="Enter id" value={sender.custid}/>
 
 
  <br/>
  <br/>
  <br/>
  <input onChange={inpEvn} type="number" name="amount" autoComplete='off' placeholder="Amount to transfer" value={sender.amount}/>
  <br/>
  <br/>
  <br/>
  <label>Receiver </label>
          <select   required 
              onClick={onChangeUsername}>
              {
                receiverlist.reclist.map(function(custi)
                
                {
                  return <option  key={custi} value={custi}> {custi}  </option>;
                })
              }
          </select>
  

  
  <br/>
  <br/>
  
  <button type ="submit"  >Click Me:</button>  {/*//now whenever this button is clicked the type submit will call onSubmit */}
  <button onClick={onGo}>SEND NOW</button>

  <button onClick={onSave}>Patch</button>
  <br/>
 
 </div>
</form>
</div>













       

       
     </div>
    
</div>
      
    </>
  );
}

export default Transfer;




// import React from 'react';
// import axios from 'axios';
// import {NavLink} from 'react-router-dom';
// import {useEffect,useState} from 'react';

// import {useParams,useLocation} from 'react-router-dom';


// function Transfer() {

//   const location=useLocation(); 
//   console.log(location) 
  
//   const newloc=[location.pathname.slice(10,34)]
//   const newsender=[location.pathname.slice(34)]
//   console.log(newloc)
//   console.log(newsender)
  
// const [receiverlist,setReceiverlist] = useState({
//   recv:"",
//   reclist:[],
  
// });

// const [updateObj, setUpdateObj] = useState({
//   senderId: newloc[0],
//   recieverId: "",
//   amountToUpdate: null
// })



// const [sender,setSender]=useState({
//   custid: newloc[0],
//   sendername:newsender[0],
//   receipentname:"",
//   amount:"",
//   recieverId: ""


// });

// useEffect(() => {

// axios.get('http://localhost:7789/users/').then(
//   (res)=>{
//     console.log(res.data)
//     setReceiverlist({
//       reclist: res.data,
//       recv: res.data[0].username
//     })


//     // setReceiverlist({
      
//     //   reclist: res.data.map(custi=>custi.username),
//     //   recv:res.data[0].username
//     // })
  
//   }).catch((err)=>{
//     console.log(err)
//   })


// },[])

// console.log("RECIEVER", receiverlist)
// const onChangeUsername=(e)=>{
   
//   console.log("ye")
//   console.log(e.target.option)
//   // var rpnm=e.target.value
//   // receiverlist.recv=e.target.value
//   // console.log( receiverlist.recv)
//   //  sender.receipentname=e.target.value
//   //  sender.recieverId=e.target.value
//    setUpdateObj({...updateObj, recieverId: e.target.value})
//    setSender({receipentname:e.target.value})
// }






// const setAmount=(e)=>{
//   inpEvn(e)
//   setUpdateObj({...updateObj, amountToUpdate: e.target.value})
// }


// const inpEvn=(event)=>{
//   // console.log(event.target.value);
//   // console.log(event.target.name);
//   const {value,name}=event.target;
//     setSender((preValue)=>{
//   // console.log(preValue);
// return{
// ...preValue,

// [name]:value,        
// };

// })



// }

  
// const onSubmits=(event)=>{
//   event.preventDefault();
//   alert('Form Submitted'); 
  
// }
// const transfer = {
//   custid:sender.custid,
//   sender:sender.sendername,
//   receiver:sender.receipentname,
//   amount:sender.amount,
//   // recieverId: sender.recieverId
  
//  }

// const onGo=()=>{

    
//        console.log("==")
//        console.log(transfer);
       
//        axios.post('http://localhost:7789/transfers/add/', transfer)
//        .then((res) => {
//         console.log(res.data)
//         console.log('Transferred')
//     }).catch((error) => {
//         console.log(error)

//     });

  
//     // window.location = '/userlist';


// }
// const onSave=()=>{
//   console.log("UPDATE", updateObj)
//   axios.patch('http://localhost:7789/users/update/'+transfer.custid, updateObj)
//         .then((res) => {
//         console.log(res.data)
//         console.log('Updated it')
//         }).catch((error) => {
//         console.log(error)
//         // axios.patch('http://localhost:7789/users/update/'+transfer.custid, JSON.stringify(transfer))
//         // .then((res) => {
//         // console.log(res.data)
//         // console.log('Updated it')
//         // }).catch((error) => {
//         // console.log(error)

// });

// }
// console.log("REC")
// console.log(receiverlist)
//   return (
//     <>
  
   
//    <div className="card text-center">

//   <div className="card-header">
//    Transaction Details
//   </div>
//   <div className="card-body">
//     <h5 className="card-title">Special title treatment</h5>
   


//     <div className="main_div">
//    <form onSubmit={onSubmits} >       {/*   //now to show what user type in heading while having form tag which has its own/different bhvr */}
//  <div>
//   <input onChange={inpEvn} type="text" name="sendername" autoComplete='off' placeholder="Sender" value={sender.sendername}/>
//   <br/>
//   <br/>
//   <br/>
//   {/* <input onChange={inpEvn} type="text" name="receipentname" autoComplete='off' placeholder="Receiver" value={sender.receipentname}/>
//   <br/>
//   <br/>
//   <br/> */}
//   <input onChange={inpEvn} type="text" name="custid" autoComplete='off' placeholder="Enter id" value={sender.custid}/>
 
 
//   <br/>
//   <br/>
//   <br/>
//   <input onChange={setAmount} type="number" name="amount" autoComplete='off' placeholder="Amount to transfer" value={sender.amount}/>
//   <br/>
//   <br/>
//   <br/>
//   <label>Receiver </label>
//           <select required 
//               onClick={onChangeUsername}>
//               {
//                 receiverlist.reclist.map(function(custi) {
//                   return <option key={custi?.username} value={custi?._id}> {custi?.username} </option>;
//                 })
//               }
//           </select>
  

  
//   <br/>
//   <br/>
  
//   <button type ="submit"  >Click Me:</button>  {/*//now whenever this button is clicked the type submit will call onSubmit */}
//   <button onClick={onGo}>SEND NOW</button>

//   <button onClick={onSave}>Patch</button>
//   <br/>
 
//  </div>
// </form>
// </div>













       

       
//      </div>
    
// </div>
      
//     </>
//   );
// }

// export default Transfer;