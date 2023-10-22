import mongoose from "mongoose";
import {OrderItem, OrderData, Item } from "../orderInterface";
// import {SignupData} from "../Routers/SignupEndpoint"

const ItemSchema = new mongoose.Schema<Item>({
    name:String,
    pid:String,
    quantity:Number,
    price:Number,//single item price
})

const OrderItemSchema = new mongoose.Schema<OrderItem>({
  items:[ItemSchema],
  total:Number,
})
const OrderSchema = new mongoose.Schema<OrderData>({
        items:[OrderItemSchema],
        uId: String,
        tmstp:Number,
      });

export const UserModel = mongoose.model<OrderData>('order', OrderSchema);
      
