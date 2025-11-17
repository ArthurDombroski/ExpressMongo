import express from "express";
import autorController from "../Controllers/autorController.js";

const routes = express.Router();

routes.get("/", autorController.getAutor);

routes.post("/", autorController.postAutor);

routes.get("/:id", autorController.getIdAutor);

routes.delete("/:id", autorController.deleteAutor);

routes.patch("/:id", autorController.patchAutor);

export default routes;