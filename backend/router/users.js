const express=require('express');
const app=express();
const {parse, stringify} = require('flatted');
const router=new express.Router();
let User = require('../models/usersmodel');


// router.route('/user').get((req, res) => {
//     User.find() //find() method of mongoDB
//       .then(users => res.json(users))  //find returns promise
//       .catch(err => res.status(400).json('Error: ' + err));
//   });


  // router.route('/user/all').get((req, res) => { 
  //   User.find() //find() method of mongoDB
  //     .then(users => res.json(users))  //find returns promise
  //     .catch(err => res.status(400).json('Error: ' + err));
  // });
//  --------------------------

// router.get('/users', async (req, res) => {
//   User.find({}, (err, result) => {
//       if (err) {
//           res.status(400);
//           res.send(err);
//       }
//       res.send(result);
//   });
// }
// );


router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


  router.route('/add').post((req, res) => {
    const username = req.body.username;
    const phone = req.body.phone;
    const balance= Number(req.body.balance);
  
  
    const newUser= new User({
      username,
      phone,
      balance,
    })
  
    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });
  
// router.get("/users",async(req,res)=>{
//     try{
//         const userInlist=await users.find();
//         console.log(userInlist);
//         res.send(userInlist);
//     }catch(e){
//        res.send(e);
//     }

// })

// router.get("/users/:id",async(req,res)=>{
//     try{
//             const _id=req.params.id;
            
//             const studentData= await users.findById({_id})
//             if(!studentData){
//                 return res.status(404).send();
//             }else{
//                 res.send(studentData);
//             }
           
//     }catch(e){
//              res.status(500).send(e);
//     }
// })


router.route('/updateusers/:id').get((req, res) => {
  const _id=req.params.id;

  const userData= User.findById({_id})
  
  // const nowData=JSON.stringify(userData)

 
  if(!userData){
    return res.status(404).send();
}else{
    res.send(stringify(userData));
}
});




router.route('/update/_id').patch((req,res)=>{
        
  const _id=req.params.id;
  const updateBalance =User.findByIdAndUpdate(_id,req.body,{
      new:true
  });   //new:true so as once we send request from postman change appears, otherwise we cklick 2 tims to see change in postman
  res.send(updateBalance).then(()=>res.json("updated"))    
   .catch(err=>res.status(404).send(e))

      

})



module.exports=router;



// const { response } = require('express');
// const express=require('express');
// const app=express();
// const router=new express.Router();
// let User = require('../models/usersmodel');


// // router.route('/user').get((req, res) => {
// //     User.find() //find() method of mongoDB
// //       .then(users => res.json(users))  //find returns promise
// //       .catch(err => res.status(400).json('Error: ' + err));
// //   });


//   // router.route('/user/all').get((req, res) => { 
//   //   User.find() //find() method of mongoDB
//   //     .then(users => res.json(users))  //find returns promise
//   //     .catch(err => res.status(400).json('Error: ' + err));
//   // });
// //  --------------------------

// // router.get('/users', async (req, res) => {
// //   User.find({}, (err, result) => {
// //       if (err) {
// //           res.status(400);
// //           res.send(err);
// //       }
// //       res.send(result);
// //   });
// // }
// // );


// router.route('/').get((req, res) => {
//   User.find()
//     .then(users => res.json(users))
//     .catch(err => res.status(400).json('Error: ' + err));
// });


//   router.route('/add').post((req, res) => {
//     const username = req.body.username;
//     const phone = req.body.phone;
//     const balance= Number(req.body.balance);
  
  
//     const newUser= new User({
//       username,
//       phone,
//       balance,
//     })
  
//     newUser.save()
//     .then(() => res.json('User added!'))
//     .catch(err => res.status(400).json('Error: ' + err));
//   });
  
// // router.get("/users",async(req,res)=>{
// //     try{
// //         const userInlist=await users.find();
// //         console.log(userInlist);
// //         res.send(userInlist);
// //     }catch(e){
// //        res.send(e);
// //     }

// // })

// // router.get("/users/:id",async(req,res)=>{
// //     try{
// //             const _id=req.params.id;
            
// //             const studentData= await users.findById({_id})
// //             if(!studentData){
// //                 return res.status(404).send();
// //             }else{
// //                 res.send(studentData);
// //             }
           
// //     }catch(e){
// //              res.status(500).send(e);
// //     }
// // })
// router.route('/update/:id').patch(async (req,res)=>{
        
//   const _id=req.params.id;
//   updateBody = req.body
//   senderObj = await User.findById(_id)
//   recieverObj = await User.findById(updateBody.recieverId)
//       console.log(senderObj)
//       console.log(recieverObj)
//       senderObj.balance = parseInt(senderObj.balance)  - parseInt(updateBody.amountToUpdate)
//       recieverObj.balance = parseInt(recieverObj.balance) + parseInt(updateBody.amountToUpdate)
//       console.log(senderObj)
//       console.log(recieverObj)
//       // users.update({_id  : ObjectId(id)}, {$set: updateObject});
//       senderRes = await User.findByIdAndUpdate(_id,senderObj,{
//           new:true
//       });
//       recRes = await User.findByIdAndUpdate(updateBody.recieverId,recieverObj,{
//         new:true
//     })

//     if(recRes){
//       res.json("updated")
//     }else{
//       res.status(404).send("ERROR")
//     }
// //   data = await User.findById(_id).then(dt => {
// //     senderObj._id = dt._id
// //     senderObj.username = dt.username
// //     senderObj.phone = dt.phone,
// //     senderObj.balance = dt.balance
// //   })
// //   User.findById(updateBody.recieverId).then(dt => recieverObj=dt)
// //   console.log(senderObj)
// //   console.log(recieverObj)
// //   senderObj.balance = senderObj.balance - updateBody.amountToUpdate
// //   recieverObj.balance = recieverObj.balance + updateBody.amountToUpdate
// //   console.log(senderObj)
// //   console.log(recieverObj)
// //   // users.update({_id  : ObjectId(id)}, {$set: updateObject});
// //   User.findByIdAndUpdate(_id,senderObj,{
// //       new:true
// //   });
// //   User.findByIdAndUpdate(updateBody.recieverId,recieverObj,{
// //     new:true
// // }).then(response => res.json("updated")).catch(err=>res.status(404).send(e));
//   //new:true so as once we send request from postman change appears, otherwise we cklick 2 tims to see change in postman
//   // res.send(senderObj).then(()=>res.json("updated"))    
//   //  .catch(err=>res.status(404).send(e))

      

// })



// module.exports=router;