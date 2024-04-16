import { Task } from "../interfaces/Task";
import axios from "./axios";
import { AxiosResponse } from "axios";

export const createTask = async (task: Task) =>
  await axios.post("/tasks", task);

export const getTasks = async (): Promise<AxiosResponse<Task[]>> =>
  await axios.get("/tasks");
