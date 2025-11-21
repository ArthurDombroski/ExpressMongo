import express from "express";
import autorController from "../Controllers/autorController.js";
import validarCampos from "../Middlewares/validMiddleware.js";

const routes = express.Router();

routes.get("/", autorController.getAutor);

routes.get("/:id", autorController.getIdAutor);

routes.post("/", validarCampos(["nome", "nacionalidade"]), autorController.postAutor);

routes.patch("/:id", autorController.patchAutor);

routes.delete("/:id", autorController.deleteAutor);



export default routes;