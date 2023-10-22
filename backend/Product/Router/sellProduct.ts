import { Router } from "express";
import { ProductData } from "../product.interface";
import { ProductModel } from "../Model/sellProductModel";

export const Sell = () =>{

    const router:Router = Router();
    router.post("/sell",async (req,res) =>{
        console.log(req.body)
        let data:ProductData= await {
            name:req.body.name,
            amount: req.body.amount,
            description: req.body.description,
            soldOut: false,
            image:req.body.image,
            quantity:req.body.quantity,
            address:req.body.address,
            postalCode:req.body.postalCode,
            contactNumber:req.body.contactNumber 
        }
        const newProduct = await new ProductModel(data);
        console.log(newProduct)
        newProduct.save()
        res.json({status:200, message: newProduct})
        
    })

    return router
}
