// api.js

import { Router } from "express";
import { verifyTokenMiddleware } from "../../middleware";
import { UserModel } from "../Model/userSchema";
import { ProductModel } from "../../Product/Model/sellProductModel";

export const addCart = () => {
  const router = Router();

  router.post("/addCart", async (req, res) => {
    try {
      const data = req.body;
      const { name, quantity, pId, price, uId } = data;
      console.log(JSON.stringify(data)+" ================")
      // Find the user based on uId
      const product =await ProductModel.findOne({pId})
      const user = await UserModel.findOne({ uId: uId });
      const newItem = {
        name: product.name,
        pId: product.pId,
        quantity: quantity,
        price: price,
        sellerUId : product.sellerUId,
      };
      console.log(user+"====")
      if (user) {
        // Create a new cart item

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
        const newUser= {uId:uId,cart:{items:[newItem],total:quantity * price}}
        const updated = await UserModel.create(newUser)
        console.log(updated);
        

      }

      res.status(200).json({ status: 200, message: "Item added successfully" });
    } catch (error) {
      console.error(error);
      res.json({ status: 500, message: "Internal server error" });
    }
  });

  return router;
};
