import livros from "../Models/livros.js"

function buscaLivroID(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id);
    });
}

const livrosController = {

    getLivros(req, res) {
        res.status(200).json(livros);
    },

    postLivros(req, res) {
        livros.push(req.body);
        res.status(201).send("Livro cadastrado com sucesso");
    },

    getIDLivros(req, res) {
        const index = buscaLivroID(req.params.id);

        if (index == -1) {
            return res.status(404).send("Livro não existe");
        }

        res.status(200).json(livros[index]);
    },

    putLivros(req, res) {
        const index = buscaLivroID(req.params.id);

        if (index == -1) {
            return res.status(404).send("Livro não existe");
        }

        livros[index].titulo = req.body.titulo;
        res.status(200).json(livros)
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