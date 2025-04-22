// import { User } from "../models/User.js";

import { validationResult } from "express-validator";

export async function registration(req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                message: errors.array()[0].msg,
            });
        }

        const { username, role, password, } = req.body;
        console.log(req.body);
        
        // const newUser = await User.create({
        //     username, role, password
        // });
        res.status(200).json({ message: "Регистрация прошла успешно" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Ошибка регистрации" });
    }
};