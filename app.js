import cookieParser from "cookie-parser";
import express from "express";
import {config} from "dotenv";
import cors from "cors";
import userRouter from "./routes/userRoute.js"
import { errorMiddleware } from "./middlewares/Error.js";
 



config({
    path: "./data/config.env",
  })

  
export const app=express();


// usng middleware for working of json data coming from api body
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin :[process.env.FRONTEND_URL],
    methods:["PUT","GET","POST","DELETE"],
    credentials:true,
  })
  );

  app.use("/api/v1/users",userRouter);




app.get("/",(req,res)=>{
    res.send("noice working");
})

// middleware for error
app.use(errorMiddleware);