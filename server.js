const http = require('http'); 
const port = 3000;

const rotas = {
    '/': 'Curso de Node',
    '/livros' : 'Pagina de Livros',
    '/autores' : 'Pagina de Autores',
    '/admins': 'Borrachinha Derruba Servidor'
}


const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-type': 'text/plain'})
    res.end(rotas[req.url])

})

server.listen(port, () => {
    console.log(`Escutando em http://localhost:${port}`)
})