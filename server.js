import http from "http"

import app from "./src/app.js"

const porta = 3000;

app.listen(porta, () => {
    console.log(`Escutando em http://localhost:${porta}`)
})