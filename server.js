import {app} from "./app.js";
import { connectdb } from "./data/database.js";


connectdb();
console.log(process.env.PORT);

app.listen(POR,()=>{
    console.log("server is working");
})