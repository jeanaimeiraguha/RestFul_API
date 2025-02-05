const express= require('express');
const app=express();
//enabling middleware
app.use(express.json)
const Items=[{
id:'1',
name:'Iraguha',

},{
     id:'002',
     name:'Cyusa'
}]


app.get('/',(req,res)=>{
     res.send('Hello')
     res.end()
})


app.listen(1000,()=>{
     console.log('Server is running on http://localhost:1000')
})