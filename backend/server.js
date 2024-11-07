// @ts-nocheck
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import connectDB from './db/db.js'
import userRouter from './routes/userRoute.js'

dotenv.config()

const app = express()

// connectDB()
//middleware
app.use(cors())
app.use(express.json())
// app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

//api
app.use("/api/users",userRouter)

const PORT = process.env.PORT || 5000

// app.listen(PORT, ()=> console.log(`Server listening on localhost:${PORT}`)
// )

app.get("/" ,( req, res ) =>
{
    res.send("home")
})

connectDB().then(()=> {
    
app.listen( PORT, () =>
{
    console.log("connect to DB");
    console.log("server is running");
    
})}).catch(()=> console.log("error connecting to DB")
)