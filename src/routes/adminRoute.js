import { Router } from "express";
import { getUsers } from '../controllers/adminController.js';
import authMiddleware from "../middleware/authMiddleware.js";
import roleMiddleware from "../middleware/roleMiddleware.js";
import { addIngredient } from "../controllers/generalController.js";

const router = new Router();

router.get("/getUsers/", authMiddleware, roleMiddleware, getUsers);
router.post("/addIngredient/", addIngredient);

export default router;