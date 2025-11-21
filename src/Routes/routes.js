import express from "express";
import livroRoutes from "./livrosRoutes.js";
import autoresRoutes from "./autoresRoutes.js";
import erroMiddleware from "../Middlewares/erroMiddleware.js";

const routes = express.Router();

routes.use("/livros",livroRoutes);

routes.use("/autores",autoresRoutes);

routes.use(erroMiddleware);

export default routes;