import { Request, Response } from "express";
import Worker from "../models/worker.model";

export const getAllWorkers = async (req: Request, res: Response) => {
  try {
    const workers = await Worker.findAll();
    const data = workers.map((u) => {
      u.password = "";
      return u;
    });
    res.json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};

export const registerNewWorker = async (req: Request, res: Response) => {
  const { data } = req.body;
  try {
    const worker = await Worker.create({ ...data });
    res.status(200).json({ auth: true, worker });
  } catch (error) {
    res.status(500).json({ auth: false, error });
  }
};

export const loginWorkerWithEmailAndPassword = async (
  req: Request,
  res: Response
) => {
  const { email, password } = req.body;
  try {
    const worker = await Worker.findOne({
      where: {
        email,
        password,
      },
    });

    if (worker) {
      worker.password = "";
      res.json({ auth: true, worker });
    } else {
      throw new Error("Worker doesn't exist.");
    }
  } catch (error) {
    res.status(500).json({ auth: false, error });
  }
};
