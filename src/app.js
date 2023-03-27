import express from "express";

const app = express();

const livros = [
    {id:1, "titulo": "Senhor dos Aneis"},
    {id:2, "titulo": "O Hobiit"}
]

app.use(express.json())   

app.get('/',(req,res) => {
    res.status(200).send('Curso de Node');
})

app.get('/livros',(req,res) => {
    res.status(200).json(livros)
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

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}


export default app