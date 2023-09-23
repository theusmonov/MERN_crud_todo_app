import mongoose from "mongoose";
import { TodoSchema } from "../schema/Todo.schema.js";


export const TodoModel = mongoose.model("todo", TodoSchema)