import express from "express";
import morgan from "morgan";
import cors from "cors";
import authRouter from "./routes/auth.router";
import userRouter from "./routes/user.router";

const app = express();

// settings
app.set("port", process.env.PORT || 4000);
app.use(express.json())

// middlewares
app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/auth", authRouter);
app.use("/users", userRouter);

export default app;