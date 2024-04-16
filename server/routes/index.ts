import { Router, Request, Response } from "express";
import Task from "../models/Task";

const router: Router = Router();

router.get("/tasks", async (req: Request, res: Response) => {
  const tasks = await Task.find();
  res.json(tasks);
});

router.get("/tasks/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.json(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post("/tasks", async (req: Request, res: Response) => {
  const { title, description } = req.body;
  const task = await new Task({ title, description }).save();
  res.json(task);
});

router.delete("/tasks/:id", async (req: Request, res: Response) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.json(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put("/tasks/:id", async (req: Request, res: Response) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(task);
});

export default router;
