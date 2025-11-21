import express from "express";
import mongoose from "mongoose";

function erroMiddleware(error, req, res, next) {

    if (error.name === "CastError") {
        return res.status(400).send("ID inválido");
    }

    res.status(500).send("Erro interno do servidor");
}

export default erroMiddleware;


