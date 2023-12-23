const mongoose=require("mongoose");
const validator=require("validator");

const userSchema=new mongoose.Schema({
     Uname:{
         type:String,
         required:true,
         minlength:2,
         unique:[true,"Username invalid"]
     },
     Upassword:{
         type:String,
         required:true,
         minlength:5,
         maxlength:12,
         unique:[true,"password invalid"]
     }
})

const User=new mongoose.model('User',userSchema);
module.exports=User;