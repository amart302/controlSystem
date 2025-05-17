import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { addDish, getDishes } from "../controllers/dish.controller.js";

const router = new Router();

router.get("/", authMiddleware, getDishes);
router.post("/", authMiddleware, addDish);
// router.patch("/", authMiddleware, updateDish);

export default router;