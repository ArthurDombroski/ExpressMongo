import express from "express";
import livroRoutes from "./livrosRoutes.js";
import autoresRoutes from "./autoresRoutes.js"

const routes = express.Router();

routes.use("/livros",livroRoutes);

routes.use("/autores",autoresRoutes);

export default routes;