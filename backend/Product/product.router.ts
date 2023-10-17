import { Router } from "express"
import { Sell } from "./Router/sellProduct";

export const Product = ()=>{
    const router = Router();
    router.use("/product",Sell());

    return router
}

