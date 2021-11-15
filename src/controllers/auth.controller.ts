import { Request, Response } from "express";
import User from "../models/user.model";

const registerWithEmailAndPassword = async (req: Request, res: Response) => {
    const { data } = req.body;
    try {
        const user = await User.create({...data});
        res.status(200).json({ auth: true, user });
    } catch (error) {
        res.status(500).json({ auth: false, error });
    }
};

const loginWithEmailAndPassword = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({
            where: {
                email,
                password
            }
        })

        if(user) {
            user.password = "";
            res.json({ auth: true, user });
        } else {
            throw new Error("User doesn't exist.");
        }
    } catch (error) {
        res.status(500).json({ auth: false, error });
    }
};

const logout = async (req: Request, res: Response) => {
    res.status(200).json({ auth: false });
};

export {
    registerWithEmailAndPassword,
    loginWithEmailAndPassword,
    logout
}