import React, { useState } from "react";
import TodoDataService from "../services/TodoService";

const AddTodo = () => {
  const initialTodoState = {
    id: null,
    title: "",
    priority: "",
    status: false,
  };

  const [todo, setTodo] = useState(initialTodoState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  };

  const saveTodo = () => {
    const data = {
      title: todo.title,
      priority: todo.priority,
    };

    TodoDataService.create(data)
      .then((res) => {
        setTodo({
          id: res.data.id,
          title: res.data.title,
          priority: res.data.priority,
          status: res.data.status,
        });
        setSubmitted(true);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newTodo = () => {
    setTodo(initialTodoState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>Todo was submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTodo}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={todo.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="priority">Priority</label>
            <input
              type="text"
              className="form-control"
              id="priority"
              required
              value={todo.priority}
              onChange={handleInputChange}
              name="priority"
            />
          </div>

          <button onClick={saveTodo} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTodo;
