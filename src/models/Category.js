import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Category = sequelize.define("Category", {
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
        image: {
            type: DataTypes.STRING(255),
        }
    },
    {
        tableName: "categories",
        timestamps: false,
        underscored: false
    }
);