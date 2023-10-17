import express from "express";
import {config} from "dotenv"
import {AuthModule} from "./Authentication/authentication.router"
import { UserModule } from "./User/user.router";
import { OrderModule } from "./Order/order.router";
import cors from 'cors'
import { mongodb } from "./db";
import { Product } from "./Product/product.router";



config()

const app :express.Application = express();
app.use(cors({
    origin: 'http://localhost:3000'
  }));  
const port: number = Number(process.env.PORT);
  mongodb()

 app.use(express.json()) 
 app.use("/api",AuthModule())
 app.use("/api",Product())
 app.use("/api",UserModule())
 app.use("/api",OrderModule())


app.listen( port||5000, () =>{
    console.log("Listening on port " + port)
} );   
