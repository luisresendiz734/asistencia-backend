import { Router } from "express";
import {
  registerNewWorker,
  getAllWorkers,
  loginWorkerWithEmailAndPassword,
} from "../controllers/worker.controller";

const workerRouter = Router();

workerRouter.get("/", getAllWorkers);
workerRouter.post("/register", registerNewWorker);
//workerRouter.post("/login", loginWorkerWithEmailAndPassword);

export default workerRouter;
