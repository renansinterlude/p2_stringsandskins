const express = require('express'); // serve pra importar o express
const app = express(); // create express app
const mysql = require('mysql2'); // serve pra importar o mysql
const bodyParser = require('body-parser'); // serve pra importar o body-parser
const port = 3000; // essa é a porta que o servidor vai rodar

app.use(bodyParser.json()); // serve pra interpretar dados no formato json
app.use(bodyParser.urlencoded({ extended: true })); // interpretar dados codificados como formulários

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'bdstringsandskins'
});

connection.connect((err) => {
    if(err) {
        console.error('Erro ao conectar ao MySQL: ', err);
    } else {
        console.log('Conexão com o MySQL realizada com sucesso!');
    }
});

// index do site
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/html/index.html');
});

// rota para a pagina de login
app.get('/sobre', (req, res) => {
    res.sendFile(__dirname + '/html/sobre.html');
});

// rota para criar um novo usuario
app.post ('/usuarios', (req, res) => {
    const { nome, email, senha, cpf, telefone } = req.body; // prompts para adicionar um novo usuario no thunder client

    const sql = 'INSERT INTO usuarios (nome, email, senha, cpf, telefone) VALUES (?, ?, ?, ?, ?)';
    const values = [nome, email, senha, cpf, telefone];

    connection.query(sql, values, (error, results, fields) => {
        if(error) {
            console.error('Erro ao inserir novo usuário: ', error);
            res.status(500).json({ mensagem: 'Erro ao adicionar usuário.'}); // erro interno do servidor
        } else {
            res.json({ mensagem: 'Usuário adicionado com sucesso!', usuario: {id: results.insertId, nome, email, cpf, telefone}});
        }
    });
});

// rota para listar todos os usuarios
app.get('/usuarios', (req, res) => {
    const sql = 'SELECT id, nome, email, telefone, cpf, senha FROM usuarios';

    connection.query(sql, (error, results, fields) => {
        if (error) {
            console.error('Erro ao buscar usuários: ', error);
            res.status(500).json({ mensagem: 'Erro ao buscar usuários.' });
        } else {
            res.json({ usuarios: results });
        }   
    });

    
});

// rota para atualizar um usuario pelo id
app.put('/usuarios/:id', (req, res) => {
    const { nome, email, senha, cpf, telefone } = req.body;
    const userId = req.params.id;

    const sql = 'UPDATE usuarios SET nome = ?, email = ?, senha = ?, cpf = ?, telefone = ? WHERE id = ?' ;
    const values = [nome, email, senha, cpf, telefone, userId];

    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error('Erro ao atualizar usuário:', error);
            res.status(500).json({ mensagem: 'Erro ao atualizar usuário.' });
        } else {
            res.json({ mensagem: 'Usuário atualizado com sucesso!' });
        }
    });
});

// rota para excluir um usuário pelo Id
app.delete('/usuarios/:id', (req, res) => {
    const userId = req.params.id;
  
    const sql = 'DELETE FROM usuarios WHERE id = ?';
    const values = [userId];
  
    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error('Erro ao excluir usuário:', error);
            res.status(500).json({ mensagem: 'Erro ao excluir usuário.' });
        } else {
            res.json({ mensagem: 'Usuário excluído com sucesso!' });
        }
    });
});

// ENDERECOS
// rota para inserir novo endereço
app.post ('/enderecos', (req, res) => {
    const { usuario_id, rua, numero, complemento, cidade, estado, cep } = req.body;

    const sql = 'INSERT INTO enderecos (usuario_id, rua, numero, complemento, cidade, estado, cep) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [ usuario_id, rua, numero, complemento, cidade, estado, cep ];

    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error('Erro ao inserir novo endereço: ', error);
            res.status(500).json({ mensagem: 'Erro ao adicionar endereço.'});
        } else {
            res.json({ mensagem: 'Endereço adicionado com sucesso!', endereco: {id: results.insertId, usuario_id, rua, numero, complemento, cidade, estado, cep}});
        }
    });
});

// rota para listar todos os endereços
app.get('/enderecos', (req, res) => {
    const sql = 'SELECT id, usuario_id, rua, numero, complemento, cidade, estado, cep FROM enderecos';

    connection.query(sql, (error, results, fields) => {
        if (error) {
            console.error('Erro ao buscar endereços: ', error);
            res.status(500).json({ mensagem: 'Erro ao buscar endereços.' });
        } else {
            res.json({ enderecos: results });
        }
    });
});

// rota para atualizar um endereço pelo id
app.put('/enderecos/:id', (req, res) => {
    const { usuario_id, rua, numero, complemento, cidade, estado, cep } = req.body;
    const enderecoId = req.params.id;

    const sql = 'UPDATE enderecos SET usuario_id = ?, rua = ?, numero = ?, complemento = ?, cidade = ?, estado = ?, cep = ? WHERE id = ?' ;
    const values = [usuario_id, rua, numero, complemento, cidade, estado, cep, enderecoId];

    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error('Erro ao atualizar endereço:', error);
            res.status(500).json({ mensagem: 'Erro ao atualizar endereço.' });
        } else {
            res.json({ mensagem: 'Endereço atualizado com sucesso!' });
        }
    });
});

// rota para excluir um endereço pelo Id
app.delete('/enderecos/:id', (req, res) => {
    const enderecoId = req.params.id;
  
    const sql = 'DELETE FROM enderecos WHERE id = ?';
    const values = [enderecoId];
  
    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error('Erro ao excluir endereço:', error);
            res.status(500).json({ mensagem: 'Erro ao excluir endereço.' });
        } else {
            res.json({ mensagem: 'Endereço excluído com sucesso!' });
        }
    });
});

// CATEGORIAS

// rota para inserir nova categoria
app.post ('/categorias', (req, res) => {
    const { nome } = req.body;

    const sql = 'INSERT INTO categorias (nome) VALUES (?);';
    const values = [ nome ];

    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error('Erro ao inserir nova categoria: ', error);
            res.status(500).json({ mensagem: 'Erro ao inserir categoria.'});
        } else {
            res.json({ mensagem: 'Categoria adicionada com sucesso!', categoria: {id: results.insertId, nome}});
        }
    });
});

// rota para listar todas as categorias
app.get('/categorias', (req, res) => {
    const sql = 'SELECT id, nome FROM categorias';

    connection.query(sql, (error, results, fields) => {
        if (error) {
            console.error('Erro ao buscar categorias: ', error);
            res.status(500).json({ mensagem: 'Erro ao buscar categorias.' });
        } else {
            res.json({ categorias: results });
        }
    });
});

// rota para atualizar uma categoria pelo id
app.put('/categorias/:id', (req, res) => {
    const { nome } = req.body;
    const categoriaId = req.params.id;

    const sql = 'UPDATE categorias SET nome = ? WHERE id = ?' ;
    const values = [nome, categoriaId];

    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error('Erro ao atualizar categoria:', error);
            res.status(500).json({ mensagem: 'Erro ao atualizar categoria.' });
        } else {
            res.json({ mensagem: 'Categoria atualizada com sucesso!' });
        }
    });
});

// rota para excluir uma categoria pelo Id
app.delete('/categorias/:id', (req, res) => {
    const categoriaId = req.params.id;
  
    const sql = 'DELETE FROM categorias WHERE id = ?';
    const values = [categoriaId];
  
    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error('Erro ao excluir categoria:', error);
            res.status(500).json({ mensagem: 'Erro ao excluir categoria.' });
        } else {
            res.json({ mensagem: 'Categoria excluída com sucesso!' });
        }
    });
});

// PRODUTOS
// rota para adicionar novo produto
app.post ('/produtos', (req, res) => {
    const { nome, descricao, preco, quantidade, categoria_id } = req.body;

    const sql = 'INSERT INTO produtos (nome, descricao, preco, quantidade, categoria_id) VALUES (?, ?, ?, ?, ?)';
    const values = [ nome, descricao, preco, quantidade, categoria_id ];

    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error('Erro ao inserir novo produto: ', error);
            res.status(500).json({ mensagem: 'Erro ao adicionar produto. '});
        } else {
            res.json({ mensagem: 'Produto adicionado com sucesso!', produto: {id: results.insertId, nome, descricao, preco, quantidade, categoria_id }});
        }
    });
});

// rota para listar produtos
app.get ('/produtos', (req, res) => {
    const sql = 'SELECT id, nome, preco FROM produtos';

    connection.query(sql, (error, results, fields) => {
        if(error) {
            console.error('Erro ao buscar produtos: ', error);
            res.status(500).json({ mensagem: 'Erro ao buscar produtos.' });
        } else {
            res.json({ produtos: results });
        }
    });
});

// rota para atualizar um produto pelo id
app.put('/produtos/:id', (req, res) => {
    const { nome, descricao, preco, quantidade, categoria_id } = req.body;
    const produtoId = req.params.id;

    const sql = 'UPDATE produtos SET nome = ?, descricao = ?, preco = ?, quantidade = ?, categoria_id = ? WHERE id = ?' ;
    const values = [nome, descricao, preco, quantidade, categoria_id, produtoId];

    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error('Erro ao atualizar produto:', error);
            res.status(500).json({ mensagem: 'Erro ao atualizar produto.' });
        } else {
            res.json({ mensagem: 'Produto atualizado com sucesso!' });
        }
    });
});

// rota para excluir um produto pelo Id
app.delete('/produtos/:id', (req, res) => {
    const produtoId = req.params.id;
  
    const sql = 'DELETE FROM produtos WHERE id = ?';
    const values = [produtoId];
  
    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error('Erro ao excluir produto:', error);
            res.status(500).json({ mensagem: 'Erro ao excluir produto.' });
        } else {
            res.json({ mensagem: 'Produto excluído com sucesso!' });
        }
    });
});

// PEDIDOS

// rota para registrar pedido
app.post('/pedidos', (req, res) => {
    const { destinatario_id } = req.body;

    const sql = 'INSERT INTO pedidos (data_hora, destinatario_id) VALUES (NOW(), ?)';
    const values = [destinatario_id];

    connection.query(sql, values, (error, results, fields) => {
        if (error) {
            console.error('Erro ao inserir novo pedido: ', error);
            res.status(500).json({ mensagem: 'Erro ao adicionar pedido.' });
        } else {
            res.json({ mensagem: 'Pedido adicionado com sucesso!', pedido: { id: results.insertId, data_hora: new Date(), destinatario_id } });
        }
    });
});

// rota para listar pedidos
app.get('/pedidos', (req, res) => {
    const sql = 'SELECT id, data_hora, destinatario_id FROM pedidos';

    connection.query(sql, (error, results, fields) => {
        if (error) {
            console.error('Erro ao buscar pedidos: ', error);
            res.status(500).json({ mensagem: 'Erro ao buscar pedidos.' });
        } else {
            res.json({ pedidos: results });
        }
    });
});

app.get('/', (req, res) => {
    res.send('Bem vindo ao backend do Strings And Skins!');
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})