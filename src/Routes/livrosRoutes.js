import express from "express";
import livrosController from "../Controllers/livrosControllers.js"

const routes = express.Router()

routes.get("/", livrosController.getLivros);

routes.post("/", livrosController.postLivros);

routes.get("/:id", livrosController.getIDLivros);

routes.put("/:id", livrosController.putLivros);

routes.delete("/:id", livrosController.deleteLivros);

routes.patch("/:id", livrosController.patchLivros);

export default routes;