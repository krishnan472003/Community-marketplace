import { Router } from "express"
import { OrderModel} from "../Model/orderSchema"
import { UserModel } from "../../User/Model/userSchema"
import moment from "moment"

export const orderProduct = () =>{
    const router= Router()
    router.post('/buy',async (req,res)=>{
        const data = {
            uId:req.body.uId,
            }
        const cartItems = await UserModel.findOne({uId:data.uId})
        if(cartItems && cartItems.cart){
            const cart =  cartItems.cart;
            let orderData = {cart:cart,tmstp:moment().unix(),uid:data.uId}
            const finalOrderData = new OrderModel(orderData)
            const savedData = await finalOrderData.save()
            if(savedData){
                res.json({status:200,message:"order placed"})
            }
            else{
                res.json({status:400,message:"Some internal issue"})
            }
                }
        else{
            res.json({status:400,message:"error"})
        }
    })
    return router;
}


