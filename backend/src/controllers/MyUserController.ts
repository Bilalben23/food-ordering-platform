import User from "@/models/user.mode";
import type { Request, Response } from "express-serve-static-core";


export const createCurrentUser = async (req: Request, res: Response) => {
    try {
        const { auth0Id } = req.body;
        const existingUser = await User.findOne({ auth0Id });

        if (existingUser) {
            res.status(200).json({
                message: "User already exists"
            });
            return
        }

        const newUser = await User.create(req.body);
        res.status(201).json({
            message: "Current user created successfully",
            user: newUser.toObject()
        });

    } catch (err) {
        console.error("Error creating current user:", err);
        res.status(500).json({
            message: "Error creating current user"
        });
    }
}