const express = require('express')
const cors = require('cors')
const {connectDB} =require ('./config/db.js');
const foodRouter = require ('./routes/FoodRoutes.js');
const userRouter = require ('./routes/UserRoutes.js');
const cartRouter = require ('./routes/CartRoutes.js')
const orderRouter=require('./routes/orderRoutes.js')


const env=require ('dotenv/config')
//app config
const app=express();
const port=4000

//middleware
app.use(express.json())
app.use(cors())

connectDB();
app.use("/api/food",foodRouter)
app.use('/images',express.static('uploads'))
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)


app.get("/",(req,res)=>{
res.send("API Working")
})
app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}` )
})