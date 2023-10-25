import { Router } from 'express';
import { UserModel } from '../Model/userSchema';

export const getUserProfile = () => {
  const router = Router();

  // Define a route that retrieves a user's profile by uId
  router.get('/userProfile', async (req, res) => {
    try {
      const uId = 123; // Get the uId from the route parameter

      // Fetch the user's profile using the UserModel and the uId
      const userProfile = await UserModel.findOne({ uId });

      if (!userProfile) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.status(200).json(userProfile);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'An error occurred while fetching the user profile' });
    }
  });

  return router;
};
