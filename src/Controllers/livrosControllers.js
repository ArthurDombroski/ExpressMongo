import { ObjectId } from "mongodb";
import {livro} from "../Models/model.js"

const livrosController = {

    async getLivros(req, res) {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
    },

    async postLivros(req, res) {
        const novoLivro = req.body;
        try {
            const livroCriado = await livro.create(novoLivro);
            return res.status(201).json(livroCriado);
        } catch (error) {
            return res.status(500).json({ message: "...", error });
        }

    },

    async getIDLivros(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);

            if (!livroEncontrado) {
                res.status(404).send("O livro não existe");
            }

            return res.status(200).json(livroEncontrado);
        } catch (error) {
            return res.status(500).json("Erro ao buscar o livro");
        }
    },

    async putLivros(req, res) {
        const index = req.params.id;
        const atualizaLivro = req.body;

        try {
            const livroAtualizado = await livro.findByIdAndUpdate(index, atualizaLivro);
            return res.status(200).json("Livro atualizado com sucesso!");
        } catch(error){
            return res.status(500).json({ message: "...", error });
        }
        
    },

    async patchLivros(req, res) {
        const index = req.params.id;
        const dados = req.body;

        try{
            const dadosAtualiazado = await livro.findByIdAndUpdate(index, dados)
            return res.status(200).json("Livro atualizado com sucesso!");
        } catch(error) {
            return res.status(500).json({ message: "...", error });
        }
    },

    async deleteLivros(req, res) {
        const index = req.params.id;

        try{
            const deletaLivro = await livro.findByIdAndDelete(index)
            return res.status(200).send("Livro deletado com sucesso")
        } catch(error) {
            return res.status(500).json({ message: "...", error });
        }

    }

}


export default livrosController;