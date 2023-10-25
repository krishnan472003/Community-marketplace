import { Router, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SignupData } from "../authInterface";
import { AuthModel } from "../Model/SignupSchema";
import moment from "moment";

let data: SignupData;
//api endpoint
export const Signup = () => {

  const router = Router();
  console.log("In Signup");
  router.post("/signup", async (req: Request, res: Response) => {
    data = await {
      email: req.body.email,
      password: req.body.password,
    };
    AuthModel.findOne({ email: data.email }).then(async (findData) => {
      if (findData === null) {
        data.password = await bcrypt.hash(data.password, 10);
        data.accessToken = jwt.sign(
          JSON.stringify(data),
          process.env.TOKEN_SECRET
        );
        const newData = new AuthModel({...data, uId: String(moment().unix())});

        await newData.save().then((data) => {
          console.log(data)
          console.log(`user with email ${data.email} is added =====`);
          res.json({ token: data.accessToken,status:200,uId: data.uId })
        });
      } else {
        res.status(200).json({ message: "account exists",status:  400 });
      }
    });
  });
  return router;
};
