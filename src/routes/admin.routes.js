import { Router } from "express";
import { getUsers } from '../controllers/admin.controller.js';
import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = new Router();

router.get("/users", authMiddleware, roleMiddleware, getUsers);

export default router;