/*const bcrypt = require('bcryptjs');     
const jwt = require('jsonwebtoken');
const Task = require('../models/Task'); 

exports.createTask=async(req,res)=>{
    try{
        const task=await Task.create({
        title:req.body.title,
        description:req.body.description,
        status:req.body.status || 'pending',
        UserId:req.body.userId
    })
    res.status(201).json({msg:"created successfully"})      
    }catch(err){
        res.status(500).send({msg:"server error"})
    }
}
*/
const Task = require('../models/Task');

exports.createTask = async (req, res) => {
    try {
        const task = await Task.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status || 'pending',
            userId: req.user.id   
        });

        res.status(201).json({
            msg: "created successfully",
            
        });

    } catch (err) {
        console.error(err); 
        res.status(500).json({ msg: "server error", error: err.message });
    }
};
exports.getTask=async(req,res)=>{
    try{
        const tasks=await Task.find({userId:req.user.id}); 
        res.json(tasks);
    }
    catch(err){
        res.status(500).json({msg:"server error"});
    }
} 
exports.getTaskById=async(req,res)=>{
    try{
        const task=await Task.findOne({
            _id:req.params.id,
            userId:req.user.id
        })
        res.json(task)
    }catch(err){
        res.json(error)
    }
}
exports.updateTask=async(req,res)=>{
    try{
        const task=await Task.findOneAndUpdate({
            _id:req.params.id,
            userId:req.user.id
        },
        {
            title:req.body.title,
            description:req.body.description,
            status:req.body.status
        },
        {new:true}
        )
        if(!task){
            res.json({msg:"task not found"})
        }   
        res.json(task)
    }catch(err){
        res.json(error)
    }
}
exports.updateTaskPatch=async(req,res)=>{
    try{
        const updates=req.body;
        const task=await Task.findOneAndUpdate({
            _id:req.params.id,
            userId:req.user.id
        },
        updates,    
        {new:true}

        )
        if(!task){
            res.json({msg:"task not found"})
        }   
        res.json(task)
    }catch(err){
        res.json(error)
    }
}
exports.deleteTask=async(req,res)=>{
    try{
        const task=await Task.findOneAndDelete({
            _id:req.params.id,
            userId:req.user.id
        })  
        if(!task){
            res.json({msg:"task not found"})
        }
        res.json({msg:"task deleted successfully"})
    }catch(err){
        res.json(error)
    }
}
