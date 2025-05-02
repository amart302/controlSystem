import { Ingredient } from "../models/Ingredient.js";

export async function addAndUpdateIngredient(req, res){
    try {
        const { name, price, unit, quantity } = req.body;
        const existingIngredient = await Ingredient.findOne({ where: { name } });

        if(existingIngredient){
            await existingIngredient.update({
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
        res.status(500).json({ error: "Ошибка сервера при попытке добавить ингредиент" });
    }
};

export async function deleteIngredient(req, res){
    try {
        const { id } = req.body;
        const existingIngredient = await Ingredient.destroy({ where: { id } });

        if(existingIngredient === 0){
            res.status(404).json({ message: "Ингредиент не найден" });
        }

        res.status(200).json({ message: "Ингредиент успешно удален" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Ошибка сервера при попытке удалить ингредиент" });
    }
};