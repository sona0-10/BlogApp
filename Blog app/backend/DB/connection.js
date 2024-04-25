const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://sona:12345@cluster0.ifmbeig.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
   .then(()=>{
    console.log("db connected")
   })
.catch((error)=>{
    console.log
})