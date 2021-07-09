const mongoose=require('mongoose');



const transferSchema=new mongoose.Schema({
  

   custid :{
       type:String,
     required:true,
   },
   sender:{
       type:String,
       required:true,
       minlength:3
   },
   receiver:{
       type:String,
       required:true,
       minlength:3
   },
   amount:{
      type:Number,
      required:true,
   }  
  

})

const Transfer=mongoose.model('Transfer',transferSchema);

module.exports=Transfer;