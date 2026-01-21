const bcrypt = require('bcryptjs');     
const jwt = require('jsonwebtoken');
const Task = require('../models/Task'); 

exports.createTask=async(req,res)=>{
    try{
        const task=await Task.create({
        title:req.body.title,
        description:req.body.description,
        status:req.body.status || 'pending',
        userId:req.body.userId
    })
    res.status(201).json({msg:"created successfully"})      
    }catch(err){
        res.status(500).send({msg:"server error"})
    }
}
