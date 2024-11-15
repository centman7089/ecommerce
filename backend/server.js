import express from 'express'
import cors from "cors"
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './db/db.js'
import connectCloudinary from './db/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRouter.js'
import cartRouter from './routes/cartRouter.js'

//App config
const app = express()
const PORT = process.env.PORT || 5000
connectDB()
connectCloudinary()


//middleware
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use( bodyParser.urlencoded( { extended: true}))


//api end point
app.use("/api/user",userRouter)
app.use("/api/product",productRouter)
app.use("/api/cart",cartRouter)
app.use( ( req, res ) =>
{
    res.send("thanks")
} )

app.listen(

PORT, ()=> console.log(`Server started on port ${PORT}`)

)