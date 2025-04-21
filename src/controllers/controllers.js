import { User } from "../models/User.js";

export async function registration(req, res) {
    try {
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