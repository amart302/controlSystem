import { User } from "../models/User.js";

export async function getUsers(req, res){
    try {
        const { count, rows: users } = await User.findAndCountAll({
            attributes: [ "id", "username", "email", "role" ],
            order: [[ "username", "ASC" ]]
        });

        res.status(200).json({
            totalItems: count,
            users
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Ошибка сервера при попытке получить список пользователей" });
    }
};