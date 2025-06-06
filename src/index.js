import express from "express";
import "dotenv/config";
import authRoutes from "./routes/auth.routes.js";
import adminRoutes from "./routes/admin.routes.js";
import ingredientsRoutes from "./routes/ingredients.routes.js";
import categoriesRoutes from "./routes/categories.routes.js";
import dishesRoutes from "./routes/dishes.routes.js";

const app = express();

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/admin", adminRoutes);
app.use("/ingredients", ingredientsRoutes);
app.use("/categories", categoriesRoutes);
app.use("/dishes", dishesRoutes);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        
        app.listen(PORT, () => {
            console.clear();
            console.log(`Сервер запущен на http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

startServer();