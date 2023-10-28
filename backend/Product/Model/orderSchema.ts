import mongoose from "mongoose";
import { OrderData } from "../orderInterface";
import { Cart, CartItem } from "../../User/userInterface.router";
// import {SignupData} from "../Routers/SignupEndpoint"

const ItemSchema = new mongoose.Schema<CartItem>({
    name:String,
    pId:String,
    sellerUId:String,
    quantity:Number,
    price:Number,//single item price
})

const OrderItemSchema = new mongoose.Schema<Cart>({
  items:[ItemSchema],
  total:Number, 
})
const OrderSchema = new mongoose.Schema<OrderData>({
        items:[OrderItemSchema],
        uId: String,
        tmstp:Number,
      });

export const OrderModel = mongoose.model<OrderData>('order', OrderSchema);
      
