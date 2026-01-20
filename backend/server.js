const express=require('express')
const app=express()

app.get('/api', (req, res) => {
    res.send('Hello from server!');
});

app.listen(4000,()=>{
    console.log("server is running on port 4000");   
})