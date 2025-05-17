import { Category } from "../models/Category.js";

export async function getCategories(req, res){
    try {
        const { count, rows: categories} = await Category.findAndCountAll({
            order: [[ "name", "ASC" ]]
        });

        res.status(200).json({
            totalItems: count,
            categories
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Ошибка сервера при попытке получить список категорий" });
    }
};

export async function addCategory(req, res){
    try {
        const { name, image } = req.body;
        const existingCategory = await Category.findOne({ where: { name } });

        if(existingCategory){
            return res.status(409).json({ message: "Категория уже существует" });
        }
        await Category.create({ name, image });
        res.status(200).json({ message: "Категория успешно добавлена" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Ошибка сервера при попытке добавить категорию" });
    }
};

export async function updateCategory(req, res){
    try {
        const { id } = req.params;
        const { name, image } = req.body;
        const existingCategory = await Category.findOne({ where: { id } });

        if(!existingCategory){
            return res.status(404).json({ message: "Категория не найдена" });
        }

        await existingCategory.update({ name, image });
        return res.status(200).json({ message: "Категория успешно обновлена" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Ошибка сервера при попытке обновить категорию" });
    }
};

export async function deleteCategory(req, res){
    try {
        const { id } = req.params;
        const existingCategory = await Category.destroy({ where: { id } });

        if(existingCategory === 0){
            res.status(404).json({ message: "Категория не найдена" });
        }

        res.status(200).json({ message: "Категория успешно удалена" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Ошибка сервера при попытке удалить категорию" });
    }
};