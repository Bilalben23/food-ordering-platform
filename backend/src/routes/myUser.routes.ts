import { Router } from "express";
import * as MyUserController from "../controllers/MyUserController.js";
import { jwtCheck, jwtParse } from "@/middlewares/auth.js";
import { validateMyUserRequest } from "@/middlewares/validation.js";


const router = Router();


router.post(
    "/",
    jwtCheck,
    MyUserController.createCurrentUser
);

router.patch(
    "/",
    jwtCheck,
    jwtParse,
    validateMyUserRequest,
    MyUserController.updateCurrentUser
);



export default router;