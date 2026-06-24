import express from "express";
import { protectedRoute } from "../middleware/protectedRoute.js";
import {
  createSession,
  getActiveSession,
  getMyRecentSessions,
  getSessionById,
  joinSession,
  endSession
} from "../controllers/sessionController.js"

const router = express.Router();

router.post("/", protectedRoute, createSession);
router.get("/active", protectedRoute, getActiveSession);
router.get("/my-recent", protectedRoute, getMyRecentSessions);


router.get("/:id", protectedRoute, getSessionById)
router.post("/:id/join",protectedRoute, joinSession)
router.post("/:id/end", protectedRoute, endSession)


export default router;