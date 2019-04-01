const express = require('express')
const app = express()





app.use((req,res,next)=>{

    let currentTime = new Date()
    let Time = currentTime.getHours()
    
    if((Time > 8)  && (Time < 17)) 
        next()
    else{
     res.sendFile(__dirname + '/public/close.html')
    }
     
})
// app.use(express.static(__dirname + '/public'))




app.get('/home',(req,res)=>{
        
        res.sendFile(__dirname + '/public/home.html')
    })


app.get('/contact',(req,res)=>{
        
        res.sendFile(__dirname + '/public/contact.html')
})


app.get('/services',(req,res)=>{
        
        res.sendFile(__dirname + '/public/ourservices.html')
 })  

app.listen(3002,(err) =>{
    if(err){
    console.log("not running")
    }
    else 
    console.log("is running in port 3002")
})