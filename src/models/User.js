import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";

export const User = sequelize.define("User", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        role: {
            type: DataTypes.ENUM("admin", "employee", "user"),
            allowNull: false,
            defaultValue: "user"
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        }
    }, {
        tableName: "users",
        timestamps: true,
        underscored: false
    }
);
// create table users (
//     id int auto_increment primary key,
//     username varchar(255) not null unique,
//     email varchar(255) not null unique,
//     role varchar(255) not null,
//     password varchar(255) not null,
//     createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//     updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
// );