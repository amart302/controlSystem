import "dotenv/config";
import { User } from "../models/User.js";

export async function getUsersList(req, res){
    try {
        const { id } = req.user;
        const user = await User.findOne({
            where: {
                id: id
            }
        });
        
        if(!user){
            return res.status(404).json({ message: "Пользователь не найден" })
        }

        if(user.role !== "admin"){
            return res.status(403).json({ message: "Отказано в доступе" });
        }
        const usersList = await User.findAll();
        res.status(200).json({ users: usersList });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Ошибка при выводе списка пользователей" });
    }
};