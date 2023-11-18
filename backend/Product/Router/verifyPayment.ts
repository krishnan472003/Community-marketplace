import { Router } from "express"
import crypto from 'crypto'
import { UserModel } from "../../User/Model/userSchema";
export const verifyPayment =()=>{

    const router = Router();
    router.post('/verify',async (req,res)=>{
        try {
            const { razorpay_order_id, razorpay_payment_id, razorpay_signature,uId } =
                req.body;
                console.log(JSON.stringify(req.body)+" aaa")
            const sign = razorpay_order_id + "|" + razorpay_payment_id;
            const expectedSign = crypto
                .createHmac("sha256", process.env.RAZORPAY_SECRET)
                .update(sign.toString())
                .digest("hex");
                console.log(expectedSign)
            const user = await UserModel.findOneAndUpdate(
                    { uId: uId }, 
                    { $set: { cart: { items: [], total: 0 } } })
           res.redirect("http://localhost:3000/finance")
        } catch (error) {
            res.status(200).json({ message: "Internal Server Error!" });
            console.log(error);

        }
    })
    return router
}