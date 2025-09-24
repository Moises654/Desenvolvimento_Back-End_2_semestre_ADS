// =======================
// IMPORTA DEPENDÊNCIAS
// =======================
const express = require ('express'); // Framework para criar servidor web
const cors = require ('cors'); // Permite requisições externas (CORS)
const axios = require ('axios'); // Para fazer requisições HTTP a APIs externas

// =======================
// CONFIGURAÇÃO DO SERVIDOR
// =======================
const app = express(); // Cria a instância do servidor Express
const PORT = 3000; // Define a porta do servidor
const apiKey = 'ca889b600944645ab4be9db1d2cd7d99'; //Sua chave da API OpenWeatherMap

// Habilita CORS, permitindo que qualquer site acesse a API
app.use(cors());

//========================
// ROTA GET /weather
// =======================
/*
app.get ('/weather', async (req, res) => {
    // Captura os parâmetros da URL: ?city=Lisboa&country=PT
    const {city, country} = req.query;

    // Validação: se cidade ou país não forem informados, retorna erro 400
    if (!city || !country) {
        return res.status(400).json({error: 'Informe cidade e país'});
    }
})
*/    

// ===========================
// ROTA GET /alert
// ===========================
app.get ('/alert', async (req, res) => {
    // Captura os parâmetros da URL: ?city=Lisboa&country=PT
    const {city, country} = req.query;

    // Validação: se cidade ou país não forem informados, retorna erro 400
    if (!city || !country) {
        return res.status(400).json({error: 'Informe cidade e país.'});
    }

    try {
        // Requisição para obter dados do clima
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric&lang=pt_br`
        );

        // Extrai temperatura com tratamento de caso nulo
        const temp = response.data.main?.temp ?? 0;

        // Cria alerta baseado na temperatura
        // >30º -> "Quente", <10ºC -> "Frio", caso contrário -> "Agradável"
        let alert = temp > 30 ? 'Quente' : temp < 10 ? 'Frio' : 'Agradável';

        // Retorna cidade, temperatura e alerta
        res.json ({city, temperature: temp, alert});

    } catch (err) {
        // Retorna erro caso falha a requisição
        res.status(500).json({error: 'Erro ao obter dados do clima.'});
    }
});

// ========================
// INICIA O SERVIDOR
// ========================
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
