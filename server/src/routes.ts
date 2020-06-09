import express from "express";

const routes = express.Router();

routes.get("/", (request, response) => {
  console.log("Hello World !!");
});

export default routes;
