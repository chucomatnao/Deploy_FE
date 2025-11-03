import axios from "axios";

export default axios.create({
  baseURL: "https://deploy-be-z08q.onrender.com/api", // URL backend Render
});
