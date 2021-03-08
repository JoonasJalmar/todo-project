import React, { useState, useEffect } from "react";
import todoDataService from "../services/TodoService";

const Todo = (props) => {
  const initialTodoState = {
    id: null,
    title: "",
    priority: "",
    status: false,
  };

  const [currentTodo, setCurrentTodo] = useState(initialTodoState);
  const [message, setMessage] = useState("");

  const getTodo = (id) => {
    todoDataService
      .get(id)
      .then((res) => {
        setCurrentTodo(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTodo(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentTodo({ ...currentTodo, [name]: value });
  };

  const updateStatus = (state) => {
    const data = {
      id: currentTodo.id,
      title: currentTodo.title,
      priority: currentTodo.priority,
      status: state,
    };

    todoDataService
      .update(currentTodo.id, data)
      .then((res) => {
        setCurrentTodo({ ...currentTodo, status: state });
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const updateTodo = () => {
    todoDataService
      .update(currentTodo.id, currentTodo)
      .then((res) => {
        console.log(res.data);
        setMessage("Todo item was updated!");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteTodo = () => {
    todoDataService
      .remove(currentTodo.id)
      .then((res) => {
        console.log(res.data);
        props.history.push("/todos");
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentTodo ? (
        <div className="edit-form">
          <h4>Todo</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={currentTodo.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="priority">Priority</label>
              <input
                type="text"
                className="form-control"
                id="priority"
                name="priority"
                value={currentTodo.priority}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentTodo.status ? "Done" : "ToDo"}
            </div>
          </form>

          {currentTodo.status ? (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateStatus(false)}
            >
              Undo
            </button>
          ) : (
            <button
              className="badge badge-primary mr-2"
              onClick={() => updateStatus(true)}
            >
              Done
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteTodo}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateTodo}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Click on a Todo!</p>
        </div>
      )}
    </div>
  );
};

export default Todo;
