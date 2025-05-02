import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { addAndUpdateIngredient, deleteIngredient } from "../controllers/ingredients.controller.js";

const router = new Router();

router.post("/addAndUpdateIngredient/", authMiddleware, addAndUpdateIngredient);
router.delete("/deleteIngredient/", authMiddleware, deleteIngredient);

export default router;