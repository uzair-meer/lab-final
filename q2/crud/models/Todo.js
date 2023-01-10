import mongoose from "mongoose";

// defining schema

const TodoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  descrp: { type: String, required: true },
});

// creating model
const TodoModel = mongoose.model("todo", TodoSchema);

export default TodoModel;
