const express=require('express');
const app=express();
require('./db/conn')
const User=require('./models/users');
app.use(express.json());

const port=process.env.PORT || 4500;

app.post('/users',(req,res)=>{
    console.log(req.body)
    const user=new User(req.body);
    console.log(user);


    user.save().then(()=>{
        res.status(200).send(user)
   }).catch((e)=>{
       res.status(400).send(e)
           //status code shows status of request 400 -->bad request and 200 -->ok    
   });

})

app.listen(port,()=>{
    console.log(`connection is setup at port ${port}`)
})