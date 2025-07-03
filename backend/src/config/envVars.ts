import { configDotenv } from "dotenv";
configDotenv();

export const ENV_VARS = {
    PORT: Number(process.env.PORT) || 5000,
    NODE_ENV: process.env.NODE_ENV as ("development" | "production"),
    CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5173",
    MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/quickblog",
    AUTH0_AUDIENCE: process.env.AUTH0_AUDIENCE || "mern-food-ordering-app-api",
    AUTH0_ISSUER_BASE_URL: process.env.AUTH0_ISSUER_BASE_URL || ""
}