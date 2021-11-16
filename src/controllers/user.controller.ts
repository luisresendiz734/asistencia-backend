import { Request, Response } from "express";
import User from "../models/user.model";

// TODO: Refactor
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.findAll();
    const data = users.map((u) => {
      u.password = "";
      return u;
    });
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

export const registerNewUser = async (req: Request, res: Response) => {
  const { data } = req.body;
  try {
    const user = await User.create({ ...data });
    res.status(200).json({ auth: true, user });
  } catch (error) {
    res.status(500).json({ auth: false, error });
  }
};

export const loginUserWithEmailAndPassword = async (
  req: Request,
  res: Response
) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        email,
        password,
      },
    });

    if (user) {
      user.password = "";
      res.json({ auth: true, user });
    } else {
      throw new Error("User doesn't exist.");
    }
  } catch (error) {
    res.status(500).json({ auth: false, error });
  }
};
