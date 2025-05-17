import { Ingredient } from "../models/Ingredient.js";

export async function getIngredients(req, res){
    try {
        const { count, rows: ingredients } = await Ingredient.findAndCountAll({
            order: [[ "name", "ASC" ]]
        });

        res.status(200).json({
            totalItems: count,
            ingredients
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Ошибка сервера при попытке получить список ингредиентов" });
    }
};

export async function addIngredient(req, res){
    try {
        const { name, price, unit, quantity } = req.body;
        const existingIngredient = await Ingredient.findOne({ where: { name } });

        if(existingIngredient){
            return res.status(409).json({ message: "Ингредиент уже существует" });
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

export async function updateIngredient(req, res){
    try {
        const { id } = req.params;
        const { name, price, unit, quantity } = req.body;
        const existingIngredient = await Ingredient.findOne({ where: { id } });

        if(!existingIngredient){
            return res.status(404).json({ message: "Ингредиент не найден" });
        }

        await existingIngredient.update({ name, price, unit, quantity });
        return res.status(200).json({ message: "Ингредиент успешно обновлен" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Ошибка сервера при попытке обновить ингредиент" });
    }
};

export async function deleteIngredient(req, res){
    try {
        const { id } = req.params;
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