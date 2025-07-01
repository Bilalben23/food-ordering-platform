import { Router } from "express";
import * as MyUserController from "../controllers/MyUserController.js";


const router = Router();


router.post("/", MyUserController.createCurrentUser);


export default router;