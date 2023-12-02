const express=require('express');
const app = express();
const cors=require('cors');
const router = require('./router/router');


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
 res.status(200).sendFile(__dirname+'/view/index.html');
});

app.use(router);



module.exports=app;
