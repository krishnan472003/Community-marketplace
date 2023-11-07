import { Router } from "express"
import { OrderModel} from "../Model/orderSchema"
import { UserModel } from "../../User/Model/userSchema"
import moment from "moment"
import Razorpay from 'razorpay'

export const orderProduct = () =>{
    const router= Router()
    router.post('/buy',async (req,res)=>{
        const razorpayInstance = new Razorpay({ 
  
            key_id: process.env.RAZORPAY_ID, 
          
            // Replace with your key_secret 
            key_secret:process.env.RAZORPAY_SECRET 
        }); 
        const data = {
            uId:req.body.uId,
            }
        const cartItems = await UserModel.findOne({uId:data.uId})
        if(cartItems && cartItems.cart){
            const cart =  cartItems.cart;
            let orderData = {cart:cart,tmstp:moment().unix(),uid:data.uId}
            const finalOrderData = new OrderModel(orderData)
            const savedData = await finalOrderData.save()
            console.log(savedData)
            if(savedData){
                razorpayInstance.orders.create({amount: Math.floor(Number(savedData.cart.total)), currency: "INR", receipt: moment().unix().toString(), notes:{key:"test"}},
                    (err, order)=>{ 

                        //STEP 3 & 4:  
                        if(!err) 
                            res.json(order) 
                        else
                            res.send(err); 
                    } 
                ) 
            }
            }
            else{
                res.json({status:400,message:"Some internal issue"})
            }
                
        // else{
        //     res.json({status:400,message:"error"})
        // }
    })
    return router;
}


