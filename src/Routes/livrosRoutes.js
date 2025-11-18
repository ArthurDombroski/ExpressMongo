import express from "express";
import livrosController from "../Controllers/livrosControllers.js"

const routes = express.Router()

routes.get("/", livrosController.getLivros);

routes.get("/busca", livrosController.getLivrosEditora);

routes.get("/:id", livrosController.getIDLivros);

routes.post("/", livrosController.postLivros);

routes.put("/:id", livrosController.putLivros);

routes.patch("/:id", livrosController.patchLivros);

routes.delete("/:id", livrosController.deleteLivros);



export default routes;