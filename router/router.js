const router=require('express').Router();

const multer=require('multer');

const path=require('path');
const imageModel = require('../model/image.model');


    const storage=multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'./images/');
        },
        filename:(req,file,cb)=>{
            const fileExt=path.extname(file.originalname);
            const filename=file.originalname.replace(fileExt,"").toLowerCase().split(' ').join('-'+"-"+Date.now());
            cb(null,filename+fileExt);    
        }
    });

    const upload=multer({
        storage:storage,
        limits:{
            fileSize:10000000
        },
        fileFilter:(req,file,cb)=>{
            if(file.mimetype==='image/jpg'||file.mimetype==='image/jpeg'||file.mimetype==='image/png'){
                cb(null,true);
            }else{
                cb(new Error('Only accept for JPG/JPEG/PNG type file'));
            }
        }
    });

    router.post('/upload',upload.single('profile'),async(req,res)=>{
        try {
            const newImage = new imageModel({
                image:req.file.filename,
                imageName:req.file.fieldname,
            });
            await newImage.save();
            res.status(200).json({
                message:"Image Uploaded SuccessFully",
                image:newImage
            });
        // console.log(req.file);
        } catch (error) {
            res.status(404).json(error.message);
        }
    });
   
// fieldname: 'profile',
// originalname: 'College pic.jpg',
// encoding: '7bit',
// mimetype: 'image/jpeg',
// destination: './images/',
// filename: 'college--1701488936032pic.jpg',
// path: 'images\\college--1701488936032pic.jpg',
// size: 83378

module.exports=router;
