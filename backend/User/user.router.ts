import { Router } from "express"
import { addCart } from "./Router/addCart";
import  { change }  from "./Router/changeProfile";
import { getUserProfile } from "./Router/getProfile";
import { updateCart } from "./Router/updateCart";
import { getCart } from "./Router/getCart";



export const UserModule = ()=>{
    const router = Router();
    
        router.use("/user",addCart());
        router.use("/user",change());
        router.use("/user",getUserProfile());
        router.use("/user",getCart());
        router.use("/user",updateCart());
    return router
}
