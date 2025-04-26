import { Router } from "express";
import { getUsersList } from '../controllers/adminController.js';
import authMiddleware from "../middleware/authMiddleware.js";

const router = new Router();

router.get("/getUsersList/", authMiddleware, getUsersList);

export default router;