import { Router } from "express";
import { getUsers } from '../controllers/adminController.js';
import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";

const router = new Router();

router.get("/getUsers/", authMiddleware, roleMiddleware, getUsers);

export default router;