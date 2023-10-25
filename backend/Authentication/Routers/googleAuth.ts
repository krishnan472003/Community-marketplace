//googleAuth.ts
import { Router } from "express";
import passport from "passport";
import util from "util";

export const googleAuth = () => {
  const router = Router();

  router.get(
    "/auth/google",
    passport.authenticate(
      "google",
      { scope: ["profile"] },
      function (req, res) {
        console.log("in /auth/google");
      }
    )
  );
  
  router.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      failureRedirect: "http://localhost:3000",
    }),
    function (req, res) {
      const accessToken = (req as any)?.user.accessToken;
      const uId = (req as any)?.user.id;

      res.redirect(
        `http://localhost:3000/?accessToken=${accessToken}&uId=${uId}`
      );
    }
  );

  return router;
};
