import { Router } from "express"
import { Login } from "./Routers/login";
import { Logout } from "./Routers/logout";
import { Signup } from "./Routers/Signup";
import { Token } from "./Routers/token";


export const AuthModule = ()=>{
    const router = Router();
    router.use("/auth",Signup());
    router.use("/auth",Login());
    router.use("/auth",Token());
    router.use("/auth", Logout()); // Use the Logout router

    return router
}