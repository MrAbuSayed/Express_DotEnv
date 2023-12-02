const mongoose=require('mongoose');


const imageSchema=new mongoose.Schema({
    image:{
        type:String,
        default:''
    },
    imageName:{
        type:String,
        default:''
    }
});

const imageModel =mongoose.model('images',imageSchema);

module.exports= imageModel;
