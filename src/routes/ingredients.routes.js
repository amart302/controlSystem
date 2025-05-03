import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { getIngredients, addIngredient, updateIngredient, deleteIngredient } from "../controllers/ingredients.controller.js";

const router = new Router();

router.get("/", authMiddleware, getIngredients);
router.post("/", authMiddleware, addIngredient);
router.patch("/:id", authMiddleware, updateIngredient);
router.delete("/:id", authMiddleware, deleteIngredient);

export default router;