import express from "express";
import livrosController from "../Controllers/livrosControllers.js"

const routes = express.Router()

routes.get("/livros", livrosController.getLivros);

routes.post("/livros", livrosController.postLivros);

routes.get("/livros/:id", livrosController.getIDLivros);

routes.put("/livros/:id", livrosController.putLivros);

routes.delete("/livros/:id", livrosController.deleteLivros);

export default routes;