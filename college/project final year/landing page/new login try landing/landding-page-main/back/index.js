import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from 'cookie-parser'
// import userRouter from './routes/user-routes.js'
import authRouter from './routes/auth-route.js'


dotenv.config()

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("connected to MONGODB ..........!!!!!!")
}).catch((e)=>{
    console.log(e)
})
app.listen(3001,()=>{
    console.log('server running on Port 3000')
})


// app.use("/api/user",userRouter);s
app.use("/api/auth",authRouter)

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success : false,
        statusCode,
        message,
    });
});