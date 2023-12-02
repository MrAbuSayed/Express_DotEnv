const mongoose= require('mongoose');
require('dotenv').config();

const DBURL=process.env.DBURL;
const DbConnect=async()=>{
  try {
    await mongoose.connect(DBURL);
    console.log(`Database Has been connected`);
  } catch (error) {
    console.log(error.message);
  };
};


module.exports=DbConnect;