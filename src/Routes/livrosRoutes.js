import express from "express";
import livrosController from "../Controllers/livrosControllers.js"

const routes = express.Router()

routes.get("/livros", livrosController.getLivros);

routes.post("/livros", livrosController.postLivros);

export default routes;