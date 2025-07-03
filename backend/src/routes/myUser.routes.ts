import { Router } from "express";
import * as MyUserController from "../controllers/MyUserController.js";
import { jwtCheck } from "@/middlewares/auth.js";


const router = Router();


router.post(
    "/",
    jwtCheck,
    MyUserController.createCurrentUser
);

router.patch("/", MyUserController.updateCurrentUser);



export default router;