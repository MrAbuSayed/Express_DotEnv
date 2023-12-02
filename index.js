// acsess the variable from ENV file
require('dotenv').config();
const app = require('./app');
const DbConnect = require('./connectDb/DBconnect');
const PORT= process.env.PORT || 5758 ;




app.listen(PORT,async ()=>{
    console.log(`The ser is Running on http://localhost:${PORT}/`);
    await DbConnect();
});