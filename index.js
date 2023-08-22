require('dotenv').config();
const express=require('express');
const app = express();
const PORT= process.env.PORT || 5758 ;

app.get('/',(req,res)=>{
 res.send("Hellow Programmer");
});

app.listen(PORT, ()=>{
    console.log(`The ser is Running on http://localhost:${PORT}/`);
});