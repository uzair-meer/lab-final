import TodoModel from "../models/Todo.js";

class TodoController {
  static getAllTodo = async (req, res) => {
    try {
      const result = await TodoModel.find();
      res.render("index", { data: result });
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  // getting single todo
  static getTodo = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await TodoModel.findById(id);

      res.render("todo", { data: result });
    } catch (error) {}
  };
  static updateTodo = async (req, res) => {};
  static createTodo = async (req, res) => {
    try {
      const { title, descrp } = req.body;
      const newTodo = new TodoModel({
        title,
        descrp,
      });
      // saving

      const result = await newTodo.save();
      // console.log(result);
      res.redirect("/");
    } catch (error) {
      console.log(error);
    }
  };
  static deleteTodo = async (req, res) => {
    try {
      const id = req.params.id;
      const result = await TodoModel.findByIdAndDelete(id);
      res.redirect("/");
    } catch (error) {}
  };
}
export default TodoController;
