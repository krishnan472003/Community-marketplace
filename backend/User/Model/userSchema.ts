import mongoose from "mongoose";
import { Cart, CartItem, UserData } from "../userInterface.router";

// import {SignupData} from "../Routers/SignupEndpoint"
const CartItemSchema = new mongoose.Schema<CartItem>({
  name:String,
  pId:String,
  quantity:Number,
  price:Number,
})
const CartSchema = new mongoose.Schema<Cart>({
  items:[CartItemSchema],
  total:Number,

})
const UserSchema = new mongoose.Schema<UserData>({
        uId: { type: String },  // dont touch
        fName: { type: String },
        lName: { type: String },
        address: { type: String },
        city:{ type: String },
        state:{ type: String },
        postalCode:{ type: Number },
        balance:{ type: Number },
        cart:{ type: CartSchema }, // dont touch

      });

export const UserModel = mongoose.model<UserData>('user', UserSchema);
      
