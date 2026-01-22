const jwt=require('jsonwebtoken');
exports.protect=(req,res,next)=>{
    const token=req.headers.authorization.split(' ')[1];
    if(!token){
        res.status(401).json("authorization denied");
    }
    try{
        const decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded;
        console.log(decoded);
        next();
    }catch(err){
        req.send("invalid token");
    }   
}
