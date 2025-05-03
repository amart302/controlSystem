import { Router } from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { addCategory, deleteCategory, getCategories, updateCategory } from "../controllers/categories.controller.js";


const router = new Router();

router.get("/", authMiddleware, getCategories);
router.post("/", authMiddleware, addCategory);
router.patch("/:id", authMiddleware, updateCategory);
router.delete("/:id", authMiddleware, deleteCategory);

export default router;