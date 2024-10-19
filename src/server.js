const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Configuração do MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Insira sua senha do MySQL
    database: 'hypertrofit' // Nome do banco de dados
});

db.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
    } else {
        console.log('Conectado ao MySQL!');
    }
});

// Middleware para tratar requisições POST
app.use(bodyParser.json());
app.use(express.static('public')); // Servir arquivos estáticos da pasta 'public'

// Rota para cadastrar cliente
app.post('/cadastro', (req, res) => {
    const { nome, email, idade, objetivo } = req.body;
    const sql = 'INSERT INTO clientes (nome, email, idade, objetivo) VALUES (?, ?, ?, ?)';
    db.query(sql, [nome, email, idade, objetivo], (err, result) => {
        if (err) {
            console.error('Erro ao cadastrar cliente:', err);
            res.status(500).send('Erro ao cadastrar cliente.');
        } else {
            res.send('Cliente cadastrado com sucesso!');
        }
    });
});

// Rota para adicionar treino
app.post('/adicionar-treino', (req, res) => {
    const { nomeTreino, clienteId } = req.body;
    const sql = 'INSERT INTO treinos (nome, cliente_id) VALUES (?, ?)';
    db.query(sql, [nomeTreino, clienteId], (err, result) => {
        if (err) {
            console.error('Erro ao adicionar treino:', err);
            res.status(500).send('Erro ao adicionar treino.');
        } else {
            res.send('Treino adicionado com sucesso!');
        }
    });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
