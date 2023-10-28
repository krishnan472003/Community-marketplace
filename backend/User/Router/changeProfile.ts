import { Router } from "express";
import { UserData } from "../userInterface.router";
import { UserModel} from "../Model/userSchema";

export const change = () => {
    const router: Router = Router();
  
    // Define a route that updates a user's profile by uId
    router.post("/change", async (req, res) => {
      try {
        // const uId = req.params.uId; // Get the uId from the route parameter
        let data:UserData= await {
            uId:req.body.uId,
            fName: req.body.fName,
            lName: req.body.lName,
            address: req.body.address,
            city:req.body.city,
            state:req.body.state,
            postalCode:req.body.postalCode,
            contactNumber:req.body.contactNumber,
            
           
            
            
        }// Updated user data from the request body

  
        // Update the user's profile using the UserModel and the uId
        const updatedUser = await UserModel.findOneAndUpdate({ uId:data.uId }, data, {
          new: true, // Return the updated user
        });
  
        if (!updatedUser) {
          return res.status(404).json({ message: "User not found" });
        }
  
        res.status(200).json(updatedUser);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "An error occurred while updating user profile" });
      }
    });
  
    return router;
  };


