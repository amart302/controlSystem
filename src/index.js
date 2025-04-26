import express from "express";
import "dotenv/config";
import adminRoute from "./routes/adminRoute.js";
import authRoute from "./routes/authRoute.js";

const app = express();

app.use(express.json());
app.use("/admin", adminRoute);
app.use("/auth", authRoute);

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