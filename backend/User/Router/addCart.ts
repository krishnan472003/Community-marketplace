// api.js

import { Router } from "express";
import { UserModel } from "../Model/userSchema";
import { ProductModel } from "../../Product/Model/sellProductModel";
import { CartItem } from "../userInterface.router";

export const addCart = () => {
  const router = Router();

  router.post("/addCart", async (req, res) => {
      console.log("==============================================")
      const data = req.body;
      console.log(data)
      const {quantity, pId, uId } = data;
      // Find the user based on uId
      console.log(typeof uId)
      const product =await ProductModel.findOne({pId})
      let user = await UserModel.findOne({ uId: uId });
      console.log(product+"===="+user)
      const newItem:CartItem = {
        name: product.name,
        pId: product.pId,
        quantity: quantity,
        price: product.amount,
        sellerUId : product.sellerUId,
        image :product.image,
      };
      
      console.log(newItem)
      // console.log(user+"===================================================================")
      if (user.cart ) {
        user.cart.items.push(newItem);

        
        user.cart.total += newItem.quantity * newItem.price;

        // Save the user document
        const resData = await user.save();
        console.log(resData)
        if (resData) {
          console.log('Item added to cart:', resData);
        } else {
          console.log('Error');
        }
      } else {
        const updateCart = await UserModel.findOneAndUpdate(
          { uId: String(uId) }, // Find the document with uId equal to the provided value
          {
            $set: {
              cart: {
                items: [newItem], // Set the 'items' array with a single newItem
                total: quantity * newItem.price // Calculate the total based on quantity and price
              }
            }
          }
        )
        console.log(updateCart+"========+")
        
        // console.log(updated);
      
      }

      res.json({status:200,message:"cart updated"});
    
  });

  return router;
};
