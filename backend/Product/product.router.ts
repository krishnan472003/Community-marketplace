import { Router } from "express"
import { Sell } from "./Router/sellProduct";
import { orderProduct } from "./Router/orderProduct";
import { searchProduct } from "./Router/searchProduct";
import { filterProduct } from "./Router/filterProduct";
import { verifyPayment } from "./Router/verifyPayment";
import { PastOrders } from "./Router/getPastOrders";

export const Product = ()=>{
    const router = Router();

    router.use('/product',filterProduct())//local../api/product
    router.use('/product',searchProduct())
    router.use("/product",Sell());
    router.use('/product',orderProduct())
    router.use('/product',verifyPayment())
    router.use('/product',verifyPayment())
    router.use('/product',PastOrders())
    return router
}

