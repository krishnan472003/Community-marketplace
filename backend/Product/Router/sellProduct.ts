    import { Router } from "express";
import { ProductData } from "../product.interface";
import { ProductModel } from "../Model/sellProductModel";
import moment from "moment";

export const Sell = () =>{

    const router:Router = Router();
    router.post("/sell",async (req,res) =>{
        console.log(req.body)
        let data:ProductData= {
            sellerUId: req.body.uId,
            pId: String(moment().unix()),
            name: req.body.name,
            amount: req.body.amount,
            description: req.body.description,
            soldOut: false,
            image: req.body.image,
            quantity: req.body.quantity,
            category: req.body.category,
            subCategory: req.body.subCategory,

        }
        const newProduct = await new ProductModel(data);
        console.log(newProduct)
        newProduct.save()
        res.json({status:200, message: newProduct})
        
    })

    return router
}
