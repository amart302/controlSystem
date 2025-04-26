import { validationResult } from "express-validator";
import bcrypt from 'bcryptjs';
import { Op } from "sequelize";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { User } from "../models/User.js";

const generateAccessToken = (id) => {
    const payload = {
        id,
    };
    return jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "24h" });
};

export async function registration(req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ message: errors.array()[0].msg });
        }

        const { username, email, role, password, } = req.body;
        const hashPassword = bcrypt.hashSync(password, 8);

        const candidate = await User.findOne({
            where: {
                [Op.or]: [
                    { username: username },
                    { email: email }
                ]
            }
        });

        if(candidate){
            if(candidate.username === username) return res.status(409).json({ message: "Пользователь с таким именем уже существует" });
            else if(candidate.email === email) return res.status(409).json({ message: "Пользователь с такой почтой уже существует" });
        }
        await User.create({
            username: username,
            email: email,
            role: role,
            password: hashPassword
        });
        res.status(200).json({ message: "Регистрация прошла успешно" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Ошибка регистрации" });
    }
};

export async function login(req, res) {
    try {
        const { email, password, } = req.body;

        const user = await User.findOne({
            where: {
                email: email
            }
        });
        
        if(!user){
            return res.status(401).json({ message: "Не правильный логин или пароль! Повторите вход" });
        }

        const validPassword = bcrypt.compareSync(password, user.password);
        if(!validPassword){
            return res.status(401).json({ message: "Не правильный логин или пароль! Повторите вход 123" });
        }

        const token = generateAccessToken(user.id);
        res.status(200).json({ token: token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Ошибка авторизации" });
    }
};