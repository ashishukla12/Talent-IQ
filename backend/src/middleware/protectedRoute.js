import { requireAuth } from '@clerk/express'
import User from '../models/User.js';

export const protectedRoute = [
  requireAuth({ signInUrl: "/sign-in" }), // Ensure the user is authenticated
  async (req,res,next) => {
    try {
      const clerkId = req.auth().userId; // Get the authenticated user's ID from Clerk

      // Find user in db by clerk ID
      const user = await User.findOne({ clerkId });

      if(!user) return res.status(404).json({ message: "User not found" });

      req.user = user; // Attach the user object to the request for use in subsequent middleware or route handlers
      next(); // Proceed to the next middleware or route handler
    } catch (error) {
      console.error("Error in protected route middleware:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }
]