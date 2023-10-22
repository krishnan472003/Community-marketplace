// api.js

import { Router } from "express";
import { verifyTokenMiddleware } from "../../middleware";
import { UserModel } from "../Model/userSchema";
import { CartItem } from "../userInterface.router";

export const addCart = () => {
  const router = Router();

  router.post("/addCart", verifyTokenMiddleware, async (req, res) => {
    try {
      const data = req.body;
      const { name, quantity, pid, price, uId } = data;
      console.log(JSON.stringify(data)+" ================")
      // Find the user based on uId
      const user = await UserModel.findOne({ uId: uId });
      console.log(user+"====")
      if (user) {
        // Create a new cart item
        const newItem = {
          name: name,
          pid: pid,
          quantity: quantity,
          price: price,
        };

        // Add the item to the cart
        user.cart.items.push(newItem);

        // Update the total in the cart (assuming total needs to be recalculated)
        user.cart.total += quantity * price;

        // Save the user document
        const resData = await user.save();
        
        if (resData) {
          console.log('Item added to cart:', resData);
        } else {
          console.log('Error');
        }
      } else {
        console.error(`User with uId ${uId} not found`);
      }

      res.status(200).json({ status: 200, message: "Item added successfully" });
    } catch (error) {
      console.error(error);
      res.json({ status: 500, message: "Internal server error" });
    }
  });

  return router;
};
