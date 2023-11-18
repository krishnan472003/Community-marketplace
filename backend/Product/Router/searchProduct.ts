import { Router } from "express"
import { ProductModel } from "../Model/sellProductModel"

export const searchProduct = () => {
    const router = Router()
    router.get('/search', async (req, res) => {
        const { query } = req.query; // Use req.query to access query parameters
        console.log(query+"  =")
        const productDetails = await ProductModel.find({ name:  { $regex: query, $options: 'i' } })

        if (productDetails) {
            res.json({ productDetails })
        } else {
            res.json({ status: 400, message: "no such product" })
        }
    })
    return router;
}
