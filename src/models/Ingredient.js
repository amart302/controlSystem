import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Ingredient = sequelize.define("Ingredient", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        unit: {
            type: DataTypes.ENUM("г", "мл", "шт", "л", "кг", "мг"),
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        tableName: "ingredients",
        timestamps: false,
        underscored: false
    }
);