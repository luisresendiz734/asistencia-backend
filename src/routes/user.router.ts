import { Router } from "express";
import {
  getAllUsers,
  loginUserWithEmailAndPassword,
  logout,
  registerNewUser,
} from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.post("/register", registerNewUser);
userRouter.post("/login", loginUserWithEmailAndPassword);
userRouter.post("/logout", logout)

export default userRouter;
