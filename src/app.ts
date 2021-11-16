import express from "express";
import morgan from "morgan";
import cors from "cors";
import userRouter from "./routes/user.router";
import workerRouter from "./routes/worker.router";

const app = express();

// settings
app.set("port", process.env.PORT || 4000);
app.use(express.json());

// middlewares
app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/workers", workerRouter);
app.use("/users", userRouter);

export default app;
