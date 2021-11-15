import { Router } from "express";
import { loginWithEmailAndPassword, logout, registerWithEmailAndPassword } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/register", registerWithEmailAndPassword);
authRouter.post("/login", loginWithEmailAndPassword);
authRouter.post("/logout", logout);

export default authRouter;