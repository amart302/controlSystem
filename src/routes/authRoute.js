import { Router } from "express";
import { body } from "express-validator";
import { registration, login } from '../controllers/authController.js';

const router = new Router();

router.post("/registration", [
    body("username")
        .trim()
        .notEmpty().withMessage("Имя пользователя не должно быть пустым")
        .isLength({ max: 100 }).withMessage("Имя пользователя слишком длинное"),
    body("email")
        .notEmpty().withMessage("Email не должен быть пустым")
        .isLength({ max: 100 }).withMessage("Email слишком длинный")
        .isEmail().withMessage("Введите корректный email")
        .normalizeEmail(),
    body("password")
        .trim()
        .notEmpty().withMessage("Пароль не должен быть пустым")
        .isLength({ min: 4, max: 4 }).withMessage("Пароль должен состоять из 4 символов")
], registration);

router.post("/login", [
    body("email")
        .notEmpty().withMessage("Email не должен быть пустым")
        .isEmail().withMessage("Введите корректный email")
        .isLength({ max: 100 }).withMessage("Email слишком длинный")
        .normalizeEmail(),
    body("password")
        .trim()
        .notEmpty().withMessage("Пароль не должен быть пустым")
        .isLength({ min: 4, max: 4 }).withMessage("Пароль должен состоять из 4 символов")
], login);

export default router;