import {app} from "./app.js";
import { connectdb } from "./data/database.js";


connectdb();
console.log(process.env.PORT);

app.listen("3000",()=>{
    console.log("server is working");
})