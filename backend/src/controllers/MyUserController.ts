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
        res.status(500).json({
            message: "Error creating current user"
        });
    }
}


export const updateCurrentUser = async (req: Request, res: Response) => {
    try {

        const { name, addressLine1, country, city } = req.body;

        const user = await User.findById(req.userId);

        if (!user) {
            res.status(404).json({
                message: "User not found"
            })
            return;
        }

        user.name = name;
        user.addressLine1 = addressLine1;
        user.city = city;
        user.country = country;

        res.send(user);

    } catch (err) {
        console.error(err);
        res.status(500).json({
            message: "Error updating current user"
        });
    }
}
