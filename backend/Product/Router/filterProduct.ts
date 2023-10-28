import { Router } from "express";
import { ProductModel } from "../Model/sellProductModel";

export const filterProduct = () => {
  const router = Router();//api/product/filter
  router.get("/filter", async (req, res) => {
    const query = req.query; // Use req.query to access query parameters
    const productDetails = await ProductModel.find(query);
    if (productDetails) {
      res.json({ productDetails });
    } else {
      res.json({ status: 400, message: "no such product" });
    }
  });
  return router;
};
