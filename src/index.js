import express from "express";
import "dotenv/config";
import { router } from "./routes/router.js";

const app = express();

app.use(express.json());
app.use("/auth", router);

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