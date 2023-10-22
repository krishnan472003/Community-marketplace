import mongoose, { Model } from "mongoose";
import { SignupData } from "../authInterface";
// import {SignupData} from "../Routers/SignupEndpoint"

const SignupSchema = new mongoose.Schema<SignupData>({
        email: { type: String, required: true },
        password: { type: String, required: true },    
        accessToken: { type: String, required: true },
      });

export const AuthModel = mongoose.model<SignupData>('auth', SignupSchema);
      
