import { Router } from 'express';
import { UserModel } from '../Model/userSchema';

export const getUserProfile = () => {
  const router = Router();

  // Define a route that retrieves a user's profile by uId
  router.get('/userProfile', async (req, res) => {
    try {
      const {uId} = req.query; // Get the uId from the route parameter

      // Fetch the user's profile using the UserModel and the uId
      const userProfile = await UserModel.findOne({ uId });
      console.log(userProfile)
      if (userProfile) {
        res.json({userProfile,status:200});
      }
      else{

        res.json({ message: 'User not found',status:400 });
      }

    } catch (error) {
      console.error(error);
      res.json({ message: 'An error occurred while fetching the user profile' });
    }
  });

  return router;
};
