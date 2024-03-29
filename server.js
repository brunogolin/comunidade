const express = require('express');
const app = express();

const nameProject = 'comunidade-angular'

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/' + nameProject))

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/' + nameProject + '/index.html');
})

app.listen(PORT, () => {
    console.log('Servidor iniciado na porta: ' + PORT)
})