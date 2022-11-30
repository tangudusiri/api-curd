const express=require("express")
const mongoose=require("mongoose")
const app=express()
app.use(express.json())
app.use(express.urlencoded())
const path=require("path")
const ejs=require('ejs')
let tasks=[]
app.set("view engine","ejs")
app.set("views",path.join(__dirname))
app.post("/v1/tasks",(req,res)=>{
  tasks.push(  res.send({id:req.body.id}))
})
app.get("/v1/tasks",(req,res)=>{
    res.send([...tasks])
})
app.listen(3000,()=>{
    console.log("port running at 3000")
})