import { Router } from "express"
import { addCart } from "./Router/addCart";
import { updateCart } from "./Router/updateCart";



export const UserModule = ()=>{
    const router = Router();
        router.use("/user",addCart());
        router.use("/user",updateCart());
    return router
}