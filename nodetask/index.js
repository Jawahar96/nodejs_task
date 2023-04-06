const fs =require('fs')

const express=require('express');


const date =new Date();

const PORT = process.env.PORT || 3000
const app=express();

app.get('/api',function(req,res){
   
    fs.writeFile(`./date.txt","Date : ${date.getDate()}-${date.getMonth() +1}-${date.getFullYear()}, timestamp : ${new Date()}`,function(error)
    {
        res.send("A timestamp is running on the server ");
    if(error) throw error;
    console.log("File created");

    })
  
res.json("File  created")
   })
app.listen(PORT,console.log(`Server is running on the ${PORT}`))

