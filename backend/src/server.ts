import express from "express";
import cors from "cors";
import helmet from "helmet";
import { ENV_VARS } from "./config/envVars";
import connectDB from "./config/db";
import myUserRoutes from "./routes/myUser.routes";


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors({
    origin: [ENV_VARS.CLIENT_URL],
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
}));



app.use("/api/v1/my/user", myUserRoutes);


const PORT = ENV_VARS.PORT;
app.listen(PORT, () => {
    connectDB();
    console.log(`✅ App is running on http://localhost:${ENV_VARS.PORT}`);
})