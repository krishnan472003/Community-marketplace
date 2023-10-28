import { Router } from "express"
import { Sell } from "./Router/sellProduct";
import { orderProduct } from "./Router/orderProduct";
import { searchProduct } from "./Router/searchProduct";
import { filterProduct } from "./Router/filterProduct";

export const Product = ()=>{
    const router = Router();
    router.use('/product',filterProduct())
    router.use('/product',searchProduct())
    router.use("/product",Sell());
    router.use('/product',orderProduct())
    return router
}

