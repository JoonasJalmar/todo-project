module.exports = (app) => {
  const todos = require("./database/todo.controller.js");
  const express = require("express");
  const router = express.Router();

  // Create and save a new todo.
  router.post("/", todos.create);

  // Get all todos.
  router.get("/", todos.findAll);

  // Get all done todos
  router.get("/done", todos.findAllDone);

  // Find todo by id.
  router.get("/:id", todos.findOne);

  // Update todo status.
  router.put("/:id", todos.update);

  // Delete a todo with id
  router.delete("/:id", todos.delete);

  // Delete all todos
  router.delete("/", todos.deleteAll);

  app.use("/api/todos", router);
};
