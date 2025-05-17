import { Dish } from "../models/Dish.js";

export async function getDishes(req, res){
    try {
            const { count, rows: dishes } = await Dish.findAndCountAll({
                order: [[ "name", "ASC" ]]
            });
    
            res.status(200).json({
                totalItems: count,
                dishes
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Ошибка сервера при попытке получить список блюд" });
        }
};
// create table dishes (
//     id int auto_increment primary key,
//     name varchar(100) not null unique,
//     description text,
//     ingredients text,
//     price decimal(10, 2) not null,
//     category_id int,
//     image varchar(255),
//     cost_price decimal(10, 2) not null,
//     foreign key (category_id) references categories(id)
// );
export async function addDish(req, res){
    try {
        const { name, description, ingredients, price, category_id, image, cost_price } = req.body;
        const existingDish = await Dish.findOne({ where: { name } });

        if(existingDish){
            return res.status(409).json({ message: "Блюдо уже существует" });
        }
        await Dish.create({ name, description, ingredients, price, category_id, image, cost_price });
        res.status(200).json({ message: "Блюдо успешно добавлена" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Ошибка сервера при попытке добавить блюдо" });
    }
};