import { configDotenv } from "dotenv";
configDotenv();

export const ENV_VARS = {
    PORT: Number(process.env.PORT) || 5000,
    NODE_ENV: process.env.NODE_ENV as ("development" | "production"),
    CLIENT_URL: process.env.CLIENT_URL || "http://localhost:5173"
}