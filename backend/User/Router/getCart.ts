import { Router } from "express"
import { UserModel } from "../Model/userSchema";

export const getCart = () =>{
const router = Router();
    router.get("/cart",async (req,res)=>{
        const {uId} = req.query;
        try{
            console.log(uId)
            const userData  = await UserModel.findOne({uId})
            console.log(userData)
            if(userData && userData.cart){
                
                res.json({status:200,cart:userData.cart})
            }
            else{
                res.json({status:401,message:"out of cart"})
            }
        }
        catch(e){
            res.json({status:400,message:e})
        }
        

    })
return router
}