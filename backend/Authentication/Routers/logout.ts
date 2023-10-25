import { Router } from "express";

// import { mongodb } from "../../db";
import { AuthModel } from "../Model/SignupSchema";

//api endpoint
export const Logout = () => {
  const router = Router();
  
  router.post("/logout", async (req, res) => {
    const token = req.body.token;
    req.session = null;
    (req as any).logout();

    try {
      const updatedUser = await AuthModel.findOneAndUpdate(
        { accessToken: token },
        { $unset: { accessToken: "" } },
        { new: true }
      );

      if (updatedUser) {
        res.status(200).json({ message: "Logout successful!" });
      } else {
        res.status(401).json({ message: "Invalid or expired token." });
      }
    } catch (error) {
      res.status(500).json({ message: "Error while logging out." });
    }
  });


  return router;
};
