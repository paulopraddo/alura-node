import express from "express";
import dataBase from "./config/dbConnect.js";
import livros from "./models/Livro.js";

dataBase.on("Error", console.log.bind(console, "Erro de conexão"))
dataBase.once("open", () => {
    console.log("A conexão com o banco foi feita com sucesso")
})

const app = express();

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}

app.use(express.json())   

app.get('/',(req,res) => {
    res.status(200).send('Curso de Node');
})

app.get('/livros',(req,res) => {
    livros.find((err,livros) => {
        res.status(200).json(livros);
    })
})

app.get('/livros/:id', (req,res) => {
    let index = buscaLivro(req.params.id);
    res.json(livros[index]);
})

app.post('/livros',(req,res) => {
    livros.push(req.body);
    res.status(201).send('O livro foi cadrastado com sucesso')
})

app.put('/livros/:id', (req,res) => {
    let index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.json(livros);
})

app.delete('/livros/:id', (req,res) => {
    let {id} = req.params
    let index = buscaLivro(id);
    livros.splice(index,1)
    res.send(`Livro ${id} removido com sucesso`);
})

export default app