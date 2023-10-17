import { Router } from "express";
import { ProductModel } from "../Model/sellProductModel";

export const Sell = () =>{
    const router:Router = Router();
    router.post("/sell",async (req,res) =>{
        let data= await {
            name:req.body.name,
            price: req.body.price,
            description: req.body.description,
        }
        ProductModel.findOneAndUpdate({name: data.name}, {soldOut:true})
        .then(()=>{
            res.json({message:"updated",status:200})
        })
        .catch((e)=>{
            res.json({message:e,status:200})

        })

        
    })

    return router
}
