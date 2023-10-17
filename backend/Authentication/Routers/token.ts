import express, { Router } from "express"
import { UserModel } from "../Model/SignupSchema"

export const Token = ()=>{
    const router = Router()
    router.post("/token",async (req,res)=>{
    console.log("token")
    await UserModel.findOne({ accessToken: req.body.token})
        .then((data)=>{
            console.log(data)
            if(data === null){
                res.json({status:400,message:"account not verified"})
            }
            else{
                res.json({status:200,message:"Account verified"})
            }
        })
        .catch((err)=>{
            console.log(err)
            res.json({status:200,err})
            console.log(err)
        })
    })
    return router
}