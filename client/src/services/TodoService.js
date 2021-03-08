import http from "../http-common";

const todoDataService = {
  getAll: () => {
    return http.get("/todos");
  },

  get: (id) => {
    return http.get(`/todos/${id}`);
  },

  create: (data) => {
    return http.post("/todos", data);
  },

  update: (id, data) => {
    return http.put(`/todos/${id}`, data);
  },

  remove: (id) => {
    return http.delete(`/todos/${id}`);
  },

  deleteAll: () => {
    return http.delete(`/todos`);
  },

  findByTitle: (title) => {
    return http.get(`/todos?title=${title}`);
  },
};

// module.exports = todoDataConnections;

export default todoDataService;
