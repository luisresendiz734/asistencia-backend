import { Request, Response } from "express";
import User from "../models/user.model";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.findAll();
        const data = users.map(u => {
            u.password = "";
            return u;
        })
        res.json({ success: true, data });
    } catch (error) {
        res.status(500).json({ success: false, error });
    }
}