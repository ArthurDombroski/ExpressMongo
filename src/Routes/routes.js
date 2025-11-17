import express from "express";
import livroRoutes from "./livrosRoutes.js";

const routes = express.Router();

routes.use("/livros",livroRoutes);

export default routes;