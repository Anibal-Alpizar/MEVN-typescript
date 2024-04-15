import { Router, Request, Response } from "express";

const router: Router = Router();

router.get("/tasks", (req: Request, res: Response) => {
  res.send("Get all tasks");
});

router.get("/tasks/:id", (req: Request, res: Response) => {
  res.send("Get task");
});

router.post("/tasks", (req: Request, res: Response) => {
  res.send("Create task");
});

router.delete("/tasks/:id", (req: Request, res: Response) => {
  res.send("Delete task");
});

router.put("/tasks/:id", (req: Request, res: Response) => {
  res.send("Update task");
});

export default router;
