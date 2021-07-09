const express=require('express');
const app=express();
const router=new express.Router();
let Transfer = require('../models/transfermodel');



router.route('/').get((req,res)=>{
    Transfer.find()
    .then(custs=>res.json(custs))
    .catch(err=>res.status(400).json('Error: ' + err));
}


)

router.route('/add').post((req,res)=>{
   
    const custid=req.body.custid;
    const sender=req.body.sender;
    const receiver=req.body.receiver;
    const amount=Number(req.body.amount);

    const newTrans= new Transfer({
        custid,
        sender,
        receiver,
        amount
      })
    
      newTrans.save()
      .then(() => res.json('Trans added!'))
      .catch(err => res.status(400).json('Error: ' + err));
    });
    


    







module.exports=router;


