import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Ingredient = sequelize.define("User", {
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
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        unit: {
            type: DataTypes.ENUM("мл", "г", "шт"),
            allowNull: false,
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        tableName: "ingredients",
        timestamps: false,
        underscored: false
    }
);

// create table ingredients (
//   id int(10) primary key,
//   name varchar(50) not null,
//   price DECIMAL(10, 2) not null,
//   unit varchar(10) not null,
//   quantity DECIMAL(10, 2) not null
// );

// insert into ingredients (id, name, price, unit, quantity) VALUES
// ('Молоко', 15, 'мл', 100),
// ('Кофе', 20, 'г', 10),
// ('Сахар', 5, 'г', 15),
// ('Стаканчик', 10, 'шт', 1),
// ('Крышка', 5, 'шт', 1),
// ('Мясо говядина', 45, 'г', 100),
// ('Лук', 5, 'г', 50),
// ('Морковь', 5, 'г', 50),
// ('Картофель', 8, 'г', 100),
// ('Сметана', 12, 'г', 50);