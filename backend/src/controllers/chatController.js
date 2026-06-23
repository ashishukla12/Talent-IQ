import { UNABLE_TO_FIND_POSTINSTALL_TRIGGER_JSON_SCHEMA_ERROR } from "@prisma/client/scripts/postinstall.js";

export async function getStreamToken(req, res){
  try {
    // Assuming you have a function to generate a Stream token

    // use clerkId for stream (not mongoDB _id) => it should match the id we have in the stream dashboard for the user
    const token = chatClient.createToken(req.user.clerkId)

    res.status(200).json({    
      token,
      userId: req.user.clerkId,
      userName: req.user.name,
      userImage: req.user.image
     })
    } catch (error) {
      console.error("Error generating Stream token:", error);
      res.status(500).json({ error: "Failed to generate Stream token" });
    }
  }