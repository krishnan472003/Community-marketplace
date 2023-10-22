import { Router } from "express"
import { addCart } from "./Router/addCart";



export const UserModule = ()=>{
    const router = Router();
        router.use("/user",addCart());
    return router
}