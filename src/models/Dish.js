import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";
import { Ingredient } from "./Ingredient.js";

export const Dish = sequelize.define("Dish", {
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
        description: {
            type: DataTypes.TEXT,
        },
        ingredients: {
            type: DataTypes.JSON,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER
        },
        image: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        cost_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    },
    {
        tableName: "dishes",
        timestamps: false,
        underscored: false
    }
);

// create table dishes (
//     id int auto_increment primary key,
//     name varchar(100) not null unique,
//     description text,
//     ingredients json,
//     price decimal(10, 2) not null,
//     category_id int,
//     image varchar(255),
//     cost_price decimal(10, 2) not null,
//     foreign key (category_id) references categories(id)
// );