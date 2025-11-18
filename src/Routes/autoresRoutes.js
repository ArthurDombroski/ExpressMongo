import express from "express";
import autorController from "../Controllers/autorController.js";

const routes = express.Router();

routes.get("/", autorController.getAutor);

routes.get("/:id", autorController.getIdAutor);

routes.post("/", autorController.postAutor);

routes.patch("/:id", autorController.patchAutor);

routes.delete("/:id", autorController.deleteAutor);



export default routes;