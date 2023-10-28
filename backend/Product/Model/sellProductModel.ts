import mongoose from "mongoose";
import { ProductData } from "../product.interface";
// import {SignupData} from "../Routers/SignupEndpoint"

const ProductSchema = new mongoose.Schema<ProductData>({
        sellerUId: String,
        pId : String,
        name: String,
        description: String,
        soldOut: Boolean,
        image:String,
        quantity:Number,
        amount:Number, 
        category:String,
        subCategory:String,

});

export const ProductModel = mongoose.model<ProductData>('product', ProductSchema);
      
