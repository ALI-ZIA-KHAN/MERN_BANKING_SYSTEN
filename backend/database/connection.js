// const express=require('express');
const mongoose=require('mongoose')

// const app=express();
// const port=5000;

 const db= 'mongodb+srv://iamali:iamali@banking.ak3ql.mongodb.net/bankdb?retryWrites=true&w=majority'

mongoose.connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then(()=>{
    console.log(`connection successful`)
}).catch((err)=>console.log(`no connection`));


