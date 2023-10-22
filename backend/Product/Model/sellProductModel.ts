import mongoose from "mongoose";
import { ProductData } from "../product.interface";
// import {SignupData} from "../Routers/SignupEndpoint"

const ProductSchema = new mongoose.Schema<ProductData>({
        name: { type: String,  },
        amount: { type: Number,  },
        description: { type: String,  },
        soldOut: { type: Boolean,  },
        image:{ type: String,  },
        quantity:{ type: Number,  }, 
        address: { type: String,  },
        postalCode:{ type: Number,  }, 
        contactNumber:{ type: Number,  }, 


        
      });

export const ProductModel = mongoose.model<ProductData>('product', ProductSchema);
      
