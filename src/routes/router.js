import { Router } from "express";
import { body } from "express-validator";
import { registration, login } from '../controllers/authControllers.js';

const router = new Router();

router.post("/registration", [
    body("username")
        .trim()
        .notEmpty().withMessage("Имя пользователя не должно быть пустым"),
    body("email")
        .isEmail().withMessage("Введите корректный email")
        .normalizeEmail(),
    body("role")
        .trim()
        .notEmpty().withMessage("Роль не должна быть пустой"),
    body("password")
        .isLength({ min: 6 })
        .trim()
        .notEmpty()
], registration);

router.post("/login", [
    body("email")
    .isEmail().withMessage("Введите корректный email")
    .normalizeEmail(),
    body("password")
        .isLength({ min: 6 })
        .trim()
        .notEmpty()
], login);

export { router };