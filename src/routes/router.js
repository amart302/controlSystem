import { Router } from "express";
import { body } from "express-validator";
import { registration } from '../controllers/controllers.js';

const router = new Router();

router.post("/registration", [
    body("username")
        .trim()
        .notEmpty().withMessage("Имя пользователя не должно быть пустым"),
    body("role")
        .trim()
        .notEmpty().withMessage("Роль не должна быть пустой"),
    body("password")
        .isLength({ min: 6 })
        .trim()
        .notEmpty()
], registration);

export { router };