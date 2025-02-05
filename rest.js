const express= require('express');
const app=express();

app.get('/',(req,res)=>{
     res.send('Hello')
     res.end()
})


app.listen(1000,()=>{
     console.log('Server is running on http://localhost:1000')
})