const express = require("express");
const app = express();
// const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const collection = require("./user");

const bcrypt = require('bcrypt');
const cors = require('cors');




// app.listen(9992, function check(err) {
//   if (err) console.log("error");
//   else console.log("started");
// });



app.use(bodyParser.json());

app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=> {
  const{email,password}=req.body

  
  try {
    const check = await collection.findOne({email:email})

    if(check){
      res.json("exist")
    }
    else{
      res.json("not exist")
      
    }

  }
  catch(e){
    res.json("fail")

  }
})
  

  app.post("/createaccountdiary",async(req,res)=> {
    const{email,password}=req.body

    const data = {
      email: email,
      password: password
    }
  
    
    try {
      const check = await collection.findOne({email:email})
  
      if(check){
        res.json("exist")
      }
      else{
        res.json("not exist")
        await collection.insertMany([data])
      }
  
    }
    catch(e){
      res.json("fail")
  
    }
  })

  const port = 9992;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



