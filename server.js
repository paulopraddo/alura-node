import http from "http"

import app from "./src/app.js"

const port = 3000;

app.listen(port, () => {
    console.log(`Escutando em http://localhost:${port}`)
})