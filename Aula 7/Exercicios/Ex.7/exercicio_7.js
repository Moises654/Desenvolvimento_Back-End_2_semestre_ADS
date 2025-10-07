// ========================================
// EXERCÍCIO 7 - API GAMES
// ========================================
// Instruções de instalação:
// 1. npm init -y
// 2. npm install express
// 3. node exercicio_7.js

const express = require('express');
const app = express();
app.use(express.json());

const PORT = 3001;

// ========================================
// CLASSES
// ========================================

class Cliente {
  constructor(id, nome, email, telefone, cpf) {
    this.id = id;
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.cpf = cpf;
  }
}

class Jogo {
  constructor(id, titulo, plataforma, preco, genero, anoLancamento) {
    this.id = id;
    this.titulo = titulo;
    this.plataforma = plataforma; // PS5 ou Nintendo Switch
    this.preco = preco;
    this.genero = genero;
    this.anoLancamento = anoLancamento;
  }
}

// ========================================
// GERENCIADORES (Repositórios)
// ========================================

class GerenciadorClientes {
  constructor() {
    this._lista = [];
    this._proximoId = 1;
  }

  cadastrar({ nome, email, telefone, cpf }) {
    if (!nome || !email || !telefone || !cpf) {
      throw new Error('Todos os campos são obrigatórios: nome, email, telefone, cpf');
    }

    // Validação simples de CPF (apenas verifica se tem 11 dígitos)
    if (cpf.replace(/\D/g, '').length !== 11) {
      throw new Error('CPF inválido. Deve conter 11 dígitos.');
    }

    const novoCliente = new Cliente(
      this._proximoId++,
      nome.trim(),
      email.trim(),
      telefone.trim(),
      cpf.trim()
    );

    this._lista.push(novoCliente);
    return novoCliente;
  }

  listar() {
    return [...this._lista];
  }

  buscarPorId(id) {
    const cliente = this._lista.find(c => c.id === id);
    if (!cliente) {
      throw new Error('Cliente não encontrado');
    }
    return cliente;
  }

  atualizar(id, dados) {
    const cliente = this.buscarPorId(id);

    if (dados.nome) cliente.nome = dados.nome.trim();
    if (dados.email) cliente.email = dados.email.trim();
    if (dados.telefone) cliente.telefone = dados.telefone.trim();
    if (dados.cpf) cliente.cpf = dados.cpf.trim();

    return cliente;
  }

  deletar(id) {
    const index = this._lista.findIndex(c => c.id === id);
    if (index === -1) {
      throw new Error('Cliente não encontrado');
    }
    return this._lista.splice(index, 1)[0];
  }
}

class GerenciadorJogos {
  constructor() {
    this._lista = [];
    this._proximoId = 1;
  }

  cadastrar({ titulo, plataforma, preco, genero, anoLancamento }) {
    if (!titulo || !plataforma || preco === undefined || !genero) {
      throw new Error('Campos obrigatórios: titulo, plataforma, preco, genero');
    }

    // Validação de plataforma
    const plataformasValidas = ['PS5', 'Nintendo Switch', 'Ambas'];
    if (!plataformasValidas.includes(plataforma)) {
      throw new Error('Plataforma inválida. Use: PS5, Nintendo Switch ou Ambas');
    }

    // Validação de preço
    if (preco < 0) {
      throw new Error('Preço não pode ser negativo');
    }

    const novoJogo = new Jogo(
      this._proximoId++,
      titulo.trim(),
      plataforma,
      parseFloat(preco),
      genero.trim(),
      anoLancamento || new Date().getFullYear()
    );

    this._lista.push(novoJogo);
    return novoJogo;
  }

  listar() {
    return [...this._lista];
  }

  buscarPorId(id) {
    const jogo = this._lista.find(j => j.id === id);
    if (!jogo) {
      throw new Error('Jogo não encontrado');
    }
    return jogo;
  }

  buscarPorPlataforma(plataforma) {
    return this._lista.filter(j => 
      j.plataforma === plataforma || j.plataforma === 'Ambas'
    );
  }

  atualizar(id, dados) {
    const jogo = this.buscarPorId(id);

    if (dados.titulo) jogo.titulo = dados.titulo.trim();
    if (dados.plataforma) jogo.plataforma = dados.plataforma;
    if (dados.preco !== undefined) jogo.preco = parseFloat(dados.preco);
    if (dados.genero) jogo.genero = dados.genero.trim();
    if (dados.anoLancamento) jogo.anoLancamento = dados.anoLancamento;

    return jogo;
  }

  deletar(id) {
    const index = this._lista.findIndex(j => j.id === id);
    if (index === -1) {
      throw new Error('Jogo não encontrado');
    }
    return this._lista.splice(index, 1)[0];
  }
}

// ========================================
// INSTÂNCIAS DOS GERENCIADORES
// ========================================

const gerenciadorClientes = new GerenciadorClientes();
const gerenciadorJogos = new GerenciadorJogos();

// ========================================
// ROTAS DA API
// ========================================

// Rota inicial
app.get('/', (req, res) => {
  res.json({
    mensagem: '🎮 Bem-vindo à API Games! 🎮',
    endpoints: {
      clientes: {
        cadastrar: 'POST /cadastrar_clientes',
        listar: 'GET /exibe_clientes',
        buscar: 'GET /exibe_clientes/:id',
        atualizar: 'PUT /cadastrar_clientes/:id',
        deletar: 'DELETE /cadastrar_clientes/:id'
      },
      jogos: {
        cadastrar: 'POST /cadastrar_jogos',
        listar: 'GET /exibe_jogos',
        buscar: 'GET /exibe_jogos/:id',
        filtrarPlataforma: 'GET /exibe_jogos/plataforma/:plataforma',
        atualizar: 'PUT /cadastrar_jogos/:id',
        deletar: 'DELETE /cadastrar_jogos/:id'
      }
    }
  });
});

// ========================================
// ROTAS DE CLIENTES
// ========================================

// Cadastrar cliente
app.post('/cadastrar_clientes', (req, res) => {
  try {
    const novoCliente = gerenciadorClientes.cadastrar(req.body);
    res.status(201).json({
      mensagem: 'Cliente cadastrado com sucesso!',
      cliente: novoCliente
    });
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
});

// Exibir todos os clientes
app.get('/exibe_clientes', (req, res) => {
  const clientes = gerenciadorClientes.listar();
  res.json({
    total: clientes.length,
    clientes: clientes
  });
});

// Exibir cliente por ID
app.get('/exibe_clientes/:id', (req, res) => {
  try {
    const cliente = gerenciadorClientes.buscarPorId(Number(req.params.id));
    res.json(cliente);
  } catch (erro) {
    res.status(404).json({ erro: erro.message });
  }
});

// Atualizar cliente
app.put('/cadastrar_clientes/:id', (req, res) => {
  try {
    const clienteAtualizado = gerenciadorClientes.atualizar(
      Number(req.params.id),
      req.body
    );
    res.json({
      mensagem: 'Cliente atualizado com sucesso!',
      cliente: clienteAtualizado
    });
  } catch (erro) {
    res.status(404).json({ erro: erro.message });
  }
});

// Deletar cliente
app.delete('/cadastrar_clientes/:id', (req, res) => {
  try {
    const clienteDeletado = gerenciadorClientes.deletar(Number(req.params.id));
    res.json({
      mensagem: 'Cliente deletado com sucesso!',
      cliente: clienteDeletado
    });
  } catch (erro) {
    res.status(404).json({ erro: erro.message });
  }
});

// ========================================
// ROTAS DE JOGOS
// ========================================

// Cadastrar jogo
app.post('/cadastrar_jogos', (req, res) => {
  try {
    const novoJogo = gerenciadorJogos.cadastrar(req.body);
    res.status(201).json({
      mensagem: 'Jogo cadastrado com sucesso!',
      jogo: novoJogo
    });
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
});

// Exibir todos os jogos
app.get('/exibe_jogos', (req, res) => {
  const jogos = gerenciadorJogos.listar();
  res.json({
    total: jogos.length,
    jogos: jogos
  });
});

// Exibir jogo por ID
app.get('/exibe_jogos/:id', (req, res) => {
  try {
    const jogo = gerenciadorJogos.buscarPorId(Number(req.params.id));
    res.json(jogo);
  } catch (erro) {
    res.status(404).json({ erro: erro.message });
  }
});

// Filtrar jogos por plataforma
app.get('/exibe_jogos/plataforma/:plataforma', (req, res) => {
  const jogos = gerenciadorJogos.buscarPorPlataforma(req.params.plataforma);
  res.json({
    plataforma: req.params.plataforma,
    total: jogos.length,
    jogos: jogos
  });
});

// Atualizar jogo
app.put('/cadastrar_jogos/:id', (req, res) => {
  try {
    const jogoAtualizado = gerenciadorJogos.atualizar(
      Number(req.params.id),
      req.body
    );
    res.json({
      mensagem: 'Jogo atualizado com sucesso!',
      jogo: jogoAtualizado
    });
  } catch (erro) {
    res.status(404).json({ erro: erro.message });
  }
});

// Deletar jogo
app.delete('/cadastrar_jogos/:id', (req, res) => {
  try {
    const jogoDeletado = gerenciadorJogos.deletar(Number(req.params.id));
    res.json({
      mensagem: 'Jogo deletado com sucesso!',
      jogo: jogoDeletado
    });
  } catch (erro) {
    res.status(404).json({ erro: erro.message });
  }
});

// ========================================
// INICIAR SERVIDOR
// ========================================

app.listen(PORT, () => {
  console.log(`\n🎮 API Games rodando na porta ${PORT}`);
  console.log(`📍 Acesse: http://localhost:${PORT}`);
  console.log(`📚 Documentação disponível na rota principal /\n`);
});

// ========================================
// EXEMPLOS DE USO (para testar no Postman/Insomnia)
// ========================================

/*

1. CADASTRAR CLIENTE
POST http://localhost:3001/cadastrar_clientes
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "telefone": "(19) 99999-9999",
  "cpf": "123.456.789-00"
}

2. LISTAR CLIENTES
GET http://localhost:3001/exibe_clientes

3. CADASTRAR JOGO
POST http://localhost:3001/cadastrar_jogos
{
  "titulo": "The Legend of Zelda: Tears of the Kingdom",
  "plataforma": "Nintendo Switch",
  "preco": 349.90,
  "genero": "Aventura",
  "anoLancamento": 2023
}

4. CADASTRAR JOGO PS5
POST http://localhost:3001/cadastrar_jogos
{
  "titulo": "God of War Ragnarök",
  "plataforma": "PS5",
  "preco": 299.90,
  "genero": "Ação",
  "anoLancamento": 2022
}

5. LISTAR JOGOS
GET http://localhost:3001/exibe_jogos

6. FILTRAR POR PLATAFORMA
GET http://localhost:3001/exibe_jogos/plataforma/PS5
GET http://localhost:3001/exibe_jogos/plataforma/Nintendo Switch

7. DELETAR CLIENTE
DELETE http://localhost:3001/cadastrar_clientes/1

8. DELETAR JOGO
DELETE http://localhost:3001/cadastrar_jogos/1

9. ATUALIZAR CLIENTE
PUT http://localhost:3001/cadastrar_clientes/1
{
  "telefone": "(19) 98888-8888"
}

10. ATUALIZAR JOGO
PUT http://localhost:3001/cadastrar_jogos/1
{
  "preco": 279.90
}

*/