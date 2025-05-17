import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

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
            type: DataTypes.ENUM("admin", "staff"),
            allowNull: false,
            defaultValue: "staff"
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