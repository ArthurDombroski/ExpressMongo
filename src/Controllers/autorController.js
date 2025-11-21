import { ObjectId } from "mongodb";
import {autor}  from "../Models/autor.js"
import mongoose from "mongoose";

const autorController = {

    async getAutor(req, res) {
        try {
            const listarAutores = await autor.find({})
            return res.status(200).json(listarAutores);
        } catch (error) {
            return res.status(500).send("Erro ao listar autores");
        }
    },

    async getIdAutor(req, res) {

        try {
            const index = req.params.id;
            const autorEncontrado = await autor.findById(index);

            if (autorEncontrado == null) { 
                return res.status(404).send("O autor não existe"); 
                
            } 
                
            return res.status(200).json(autorEncontrado);
            
            
        } catch (error) {
            if(error instanceof mongoose.Error.CastError) {
                return res.status(400).send("Um ou mais dados fornecidos estão incorretos");
            }

            res.status(500).send("Erro ao buscar o autor");
        }
    },

    async postAutor(req, res) {
        const autorNovo = req.body;

        try {
            const novoAutor = await autor.create(autorNovo);
            return res.status(201).json(novoAutor);
        } catch (error) {
            return res.status(500).json({ message: "...", error });
        }
    },

    async patchAutor(req, res) {
        const index = req.params.id;
        const dados = req.body;
        try {
            const autorAtualizado = await autor.findByIdAndUpdate(index, dados);
            return res.status(200).send("Autor atualizado com sucesso");
        } catch (error) {
            return res.status(500).json({ message: "...", error });
        }
    },

    async deleteAutor(req, res) {
        const index = req.params.id;

        try {
            const deletaAutor = await autor.findByIdAndDelete(index);
            return res.status(204).send("Livro deletado com sucesso");
        } catch (error) {
            return res.status(500).json({ message: "...", error });
        }
    }
}

export default autorController;