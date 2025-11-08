import { ObjectId } from "mongodb";
import livro from "../Models/livros.js"

const livrosController = {

    async getLivros(req, res) {
        const listaLivros = await livro.find({});
        res.status(200).json(listaLivros);
    },

    postLivros(req, res) {
        livros.push(req.body);
        res.status(201).send("Livro cadastrado com sucesso");
    },

    async getIDLivros(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);

            if(!livroEncontrado) {
                res.status(404).send("O livro não existe");
            }

            return res.status(200).json(livroEncontrado);
        } catch(error) {
            return res.status(500).json("Erro ao buscar o livro");
        }
    },

    putLivros(req, res) {
        const index = buscaLivroID(req.params.id);

        if (index == -1) {
            return res.status(404).send("Livro não existe");
        }

        livros[index].titulo = req.body.titulo;
        res.status(200).json(livros[index]);
    },

    patchLivros(req, res) {
        const index = buscaLivroID(req.params.id);

        if (index == -1) {
            return res.status(404).send("Livro não existe");
        }

        const dados = req.body;

        Object.assign(livros[index], dados);
        res.status(200).json(livros[index]);
    },

    deleteLivros(req, res) {
        const index = buscaLivroID(req.params.id);

        if (index == -1) {
            return res.status(404).send("Livro não existe");
        }

        livros.splice(index, 1);

        res.status(200).send("Livro deletado com sucesso")

    }

}


export default livrosController;