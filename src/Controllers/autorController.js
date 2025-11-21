import { ObjectId } from "mongodb";
import {autor}  from "../Models/autor.js"
import mongoose from "mongoose";

const autorController = {

    async getAutor(req, res, next) {
        try {
            const listarAutores = await autor.find({})
            return res.status(200).json(listarAutores);
        } catch (error) {
            next(error);
        }
    },

    async getIdAutor(req, res, next) {
        try {
            const index = req.params.id;
            const autorEncontrado = await autor.findById(index);

             if (autorEncontrado == null) { 
                 return res.status(404).send("Id do autor não localizado"); 
                
             } 
                
            return res.status(200).json(autorEncontrado);
            
            
        } catch (error) {
            next(error);
        }
    },

    async postAutor(req, res, next) {
        const autorNovo = req.body;

        try {
            const novoAutor = await autor.create(autorNovo);
            return res.status(201).json(novoAutor);
        } catch (error) {
            next(error);
        }
    },

    async patchAutor(req, res, next) {
        const index = req.params.id;
        const dados = req.body;
        try {
            const autorAtualizado = await autor.findByIdAndUpdate(index, dados);
            return res.status(200).send("Autor atualizado com sucesso");
        } catch (error) {
            next(error);
        }
    },

    async deleteAutor(req, res, next) {
        const index = req.params.id;

        try {
            const deletaAutor = await autor.findByIdAndDelete(index);
            return res.status(204).send("Livro deletado com sucesso");
        } catch (error) {
            next(error);
        }
    }
}

export default autorController;