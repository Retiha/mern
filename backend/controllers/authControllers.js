const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.register=async(req,res)=>{
    const {name,email,password}=req.body
    const existingUser=await User.findOne({email})
    if(existingUser){
        res.status(400).send({message:"email already existing"})
    }
    const hashedPassword=await bcrypt.hash(password,10)
    const user=await User.create({
        name,
        email,
        password:hashedPassword
    })
    
    res.status(201).send({msg:"created successfully"})
}
exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body
        const existingUser=await User.findOne({email})
        if(!existingUser){
            res.status(404).send("email not registered") 
        }
        const isMatching=await bcrypt.compare(password,existingUser.password)
        if(!isMatching){
            res.status(400).send("invalid credentials")
        }
        const token=jwt.sign(
            {id:existingUser._id},
            process.env.JWT_SECRET,
            {expiresIn:'1d'}

        )
        //res.status(200).send("login successfull")
        res.json({token})


    }
    catch(err){
        res.status(500).send({msg:"server error"})  
    }
}