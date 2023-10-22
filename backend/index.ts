import express from "express";
import {config} from "dotenv"
import {AuthModule} from "./Authentication/authentication.router"
import { UserModule } from "./User/user.router";
import { OrderModule } from "./Order/order.router";
import cors from 'cors'
import { mongodb } from "./db";
import { Product } from "./Product/product.router";
import bodyParser from "body-parser";



config()

const app :express.Application = express();
app.use(cors({
    origin: 'http://localhost:3000'
  }));  
const port: number = Number(process.env.PORT);
  mongodb()

app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
 app.use("/api",AuthModule())
 app.use("/api",Product())
 app.use("/api",UserModule())
 app.use("/api",OrderModule())


app.listen( port||5000, () =>{
    console.log("Listening on port " + port)
} );   
