const mongoose=require('mongoose');


const userSchema=new mongoose.Schema({
   
    username:{
        type:String,
        required:true,
        minlength:3
    },
    phone:{
        type:String,
        required:true,
        maxlength:15
    },
    balance:{
        type:String,
        minlength:2,
        required:true
    }
}
)


const User=new mongoose.model('User',userSchema);


module.exports=User;