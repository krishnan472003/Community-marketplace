import { Router } from "express";
import { ProductData } from "../product.interface";
import { ProductModel } from "../Model/sellProductModel";

export const Sell = () =>{
    const router:Router = Router();
    router.post("/sell",async (req,res) =>{
        let data:ProductData= await {
            name:req.body.name,
            price: req.body.price,
            description: req.body.description,
            soldOut: false,
            image:req.body.image,
            quantity:req.body.quantity 
        }
        const newProduct = await new ProductModel(data);
        console.log(newProduct)
        newProduct.save()
        res.json({status:200, message: newProduct})
        
    })

    return router
}
