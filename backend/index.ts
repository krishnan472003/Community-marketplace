// index.ts
import express from "express";
import { config } from "dotenv";
import { AuthModule } from "./Authentication/authentication.router";
import { UserModule } from "./User/user.router";
import { OrderModule } from "./Order/order.router";
import cors from "cors";
import { mongodb } from "./db";
import { Product } from "./Product/product.router";
import bodyParser from "body-parser";
import session from "express-session";
import passport from "passport";

import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { AuthModel } from "./Authentication/Model/SignupSchema";
import { googleAuth } from "./Authentication/Routers/googleAuth";

config();

const app: express.Application = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

const port: number = Number(process.env.PORT);

app.use(
  session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

mongodb();
// passport.use(AuthModel.createStrategy());

passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
    AuthModel.findById(id, function(err, user) {
      done(err, user);
    });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
      // passReqToCallback: true,
      // proxy: true,
    },
    async function (accessToken, refreshToken, profile, cb) {
      console.log(" " + cb + " " + JSON.stringify(profile));
      const uIdSearch = await AuthModel.findOne({ uId: profile.id });
      if (uIdSearch) {
        uIdSearch.accessToken = accessToken;
        await uIdSearch.save();
      } else {
        const data = await AuthModel.create({
          uId: profile.id,
          accessToken: accessToken,
        });
      }

      return cb(null, (profile = { ...profile, accessToken }));
    }
  )
);

app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "10mb" }));

app.use("/", googleAuth());
app.use("/api", AuthModule());
app.use("/api", Product());
app.use("/api", UserModule());
app.use("/api", OrderModule());

app.listen(port || 5000, () => {
  console.log("Listening on port " + port);
});
