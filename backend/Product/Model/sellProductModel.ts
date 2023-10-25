import mongoose from "mongoose";
import { ProductData } from "../product.interface";
// import {SignupData} from "../Routers/SignupEndpoint"

const ProductSchema = new mongoose.Schema<ProductData>({
        pId : String,
        name: { type: String,  },
        description: { type: String,  },
        soldOut: { type: Boolean,  },
        image:{ type: String,  },
        quantity:{ type: Number,  },
        amount:{ type: Number,  }, 
        address: { type: String,  },
        postalCode:{ type: Number,  }, 
        contactNumber:{ type: Number,  }, 
});

export const ProductModel = mongoose.model<ProductData>('product', ProductSchema);
      
