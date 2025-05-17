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

// create table categories (
//     id int auto_increment primary key,
//     name varchar(255) not null unique,
//     image varchar(255),
// );

// insert into categories (id, name, image) values
// ('1', 'Горячие закуски', 'https://i.imgur.com/1vLtVYw.jpg'),
// ('2', 'Супы', 'https://i.imgur.com/gUMfuYA.jpg'),
// ('3', 'Салаты', 'https://i.imgur.com/sbLCM5B.jpg'),
// ('4', 'Основные блюда', 'https://i.imgur.com/X3BRyX5.jpg'),
// ('5', 'Десерты', 'https://i.imgur.com/qSJgv4i.jpg'),
// ('6', 'Напитки', 'https://i.imgur.com/eM4ynhe.jpg');