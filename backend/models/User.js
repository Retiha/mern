const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        reguired:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }

})
module.exports=mongoose.model("Users", userSchema);


    