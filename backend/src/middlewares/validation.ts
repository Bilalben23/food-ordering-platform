import { NextFunction, Request, Response } from "express-serve-static-core";
import { body, validationResult } from "express-validator";

const handleValidationErrors = async (req: Request, res: Response, next: NextFunction) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({
            message: "Validation failed",
            errors: errors.array()
        });
        return
    }
    next()
}



export const validateMyUserRequest = [
    body("name")
        .isString()
        .notEmpty()
        .withMessage("Name must be a string."),
    body("addressLine1")
        .isString()
        .notEmpty()
        .withMessage("Address Line 1 must be a string."),
    body("city")
        .isString()
        .notEmpty()
        .withMessage("City must be a string."),
    body("country")
        .isString()
        .notEmpty()
        .withMessage("Country must be a string."),
    handleValidationErrors
];