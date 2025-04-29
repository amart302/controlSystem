import { Ingredient } from "../models/Ingredient.js";

export async function addIngredient(req, res){
    try {
        const { name, price, unit, quantity } = req.body;
        const candidate = await Ingredient.findOne({
            where: {
                name: name
            }
        });

        if(candidate){
            await candidate.update({
                name: name,
                price: price,
                unit: unit,
                quantity: quantity
            });
            return res.status(200).json({ message: "Ингредиент успешно обновлен" });
        }
        await Ingredient.create({
            name: name,
            price: price,
            unit: unit,
            quantity: quantity
        });
        res.status(200).json({ message: "Ингредиент успешно добавлен" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Ошибка сервера при попытке добавить товар" });
    }
}