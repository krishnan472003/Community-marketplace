// api.js

import { Router } from "express";
// import { verifyTokenMiddleware } from "../../middleware";
import { UserModel } from "../Model/userSchema";
import { CartItem } from "../userInterface.router";

export const updateCart = () => {
  const router = Router();

  router.post("/updateCart", async (req, res) => {
    try {
      const data = req.body;
      const { cart, uId } = data;

      const user = await UserModel.findOne({ uId: uId });

      if (user) {
        user.cart = cart
        let total = 0;
        // Add the item to the cart
        cart.items.forEach(async (item:CartItem)=>{
          total+= item.price*item.quantity
        })
        user.cart.total = total
        user.save()
        .then((data)=>{
          res.json({cart:user.cart,success:200})
        })
        .catch((err)=>res.json({status:400,message:err}))
        
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
