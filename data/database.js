import mongoose from "mongoose";

export const connectdb =()=>{

    mongoose.connect(process.env.MONGO_URI,{
        dbName:"Orbisbackendapi",
      }).then((value)=>console.log("backend is connected wroking mongo")).catch((e)=>console.log(e+"database not conncted"));


}