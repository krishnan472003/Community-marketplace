import mongoose from "mongoose";
import { ProductData } from "../product.interface";
// import {SignupData} from "../Routers/SignupEndpoint"

const ProductSchema = new mongoose.Schema<ProductData>({
        name: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        soldOut: { type: Boolean, required: true },
      });

export const ProductModel = mongoose.model<ProductData>('product', ProductSchema);
      
