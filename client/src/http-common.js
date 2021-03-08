import axios from "axios";
// Rename this file to "router.js"
export default axios.create({
  // Change baseURL accordingly.
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
  },
});
