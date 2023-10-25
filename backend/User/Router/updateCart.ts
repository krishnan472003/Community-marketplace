// api.js

import { Router } from "express";
import { verifyTokenMiddleware } from "../../middleware";
import { UserModel } from "../Model/userSchema";
import { CartItem } from "../userInterface.router";

export const updateCart = () => {
  const router = Router();

  router.post("/updateCart", verifyTokenMiddleware, async (req, res) => {
    try {
      const data = req.body;
      const { quantity, pId, uId } = data;
      console.log(typeof quantity)
      console.log(JSON.stringify(data)+" ================")

      const user = await UserModel.findOne({ uId: uId });

      if (user) {

        // Add the item to the cart
        user.cart.items.forEach(async (item:CartItem)=>{
            console.log(`${typeof item.pId}   ${typeof pId}`);
            
            if(Number(item.pId) === pId){
                if(quantity === 0){
                    user.cart.total -= item.price*item.quantity
                    user.cart.items = user.cart.items.filter((item: CartItem) => Number(item.pId) !== pId);

                    await user.save();
                    res.json({"status" : 200,"message":"cart updated"});
                }
                else{
                    
                    user.cart.total = user.cart.total - (item.quantity-quantity )* item.price;
                    console.log((item.quantity-quantity )+" "+ item.price+" "+user.cart.total+" qweeeeeeeeeeeeeeee")
                    item.quantity = quantity
                    const updatedCart = await user.save();
                    console.log(updatedCart);
                    res.json({"status" : 200,"message":"cart updated"});
                }
            }
            
        })
      } else {
        console.error(`User with uId ${uId} not found`);
      }
    } catch (error) {
      console.error(error);
      res.json({ status: 500, message: "Internal server error" });
    }
  });

  return router;
};
