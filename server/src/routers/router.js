import { Router } from "express";
import TodoController from "../controllers/Todo.controller.js";
import TodoMiddleware from "../middleware/Todo.middleware.js";
import { schema } from "../validation/validation.js";






export const TodoRouter = Router()

TodoRouter.get("/todos", TodoController.getTodo)
TodoRouter.get("/todos/:id", TodoController.getTodoId)
TodoRouter.post("/todos/new", TodoMiddleware(schema), TodoController.postTodo)
TodoRouter.put("/todos/put/:id", TodoController.putData)
TodoRouter.delete("/todos/del/:id", TodoController.deleteData)


