import express from "express";
import TodoController from "../controllers/TodoHomeController.js";
const router = express.Router();
router.get("/", TodoController.getAllTodo);
router.post("/", TodoController.createTodo);
router.get("/todo/:id", TodoController.getTodo);
router.post("/update", TodoController.updateTodo);
router.post("/delete/:id", TodoController.deleteTodo);

export default router;
