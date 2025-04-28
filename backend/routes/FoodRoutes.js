const express=require ("express");
const multer= require("multer");
const {addFood, removeFood, getFood}=require ('../controllers/FoodController')

const foodRouter=express.Router();

const storage=multer.diskStorage({
    destination:"uploads",
    filename:(req, file, cb)=>{
   return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload=multer({storage:storage})
foodRouter.post("/add", upload.single('image'),addFood)
foodRouter.post("/removefood", removeFood)
foodRouter.get("/getfood", getFood)

module.exports=foodRouter






