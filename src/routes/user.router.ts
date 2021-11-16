import { Router } from "express";
import {
  getAllUsers,
  loginUserWithEmailAndPassword,
  registerNewUser,
} from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.post("/register", registerNewUser);
userRouter.post("/login", loginUserWithEmailAndPassword);

export default userRouter;
