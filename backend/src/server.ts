import express from "express";
import cors from "cors";
import helmet from "helmet";
import { ENV_VARS } from "./config/envVars";


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


app.get("/", async (req, res) => {
    res.send("Hello world");
})

const PORT = ENV_VARS.PORT;
app.listen(PORT, () => {
    console.log(`app is running at http://localhost:${PORT}`);
})