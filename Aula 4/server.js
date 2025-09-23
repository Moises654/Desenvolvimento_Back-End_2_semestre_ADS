// ===========================
// IMPORTA DEPENDÊNCIAS
// ===========================
const express = require('express');
const cors = require('cors');
const axios = require('axios');

// ===========================
// CONFIGURAÇÃO DO SERVIDOR
// ===========================
const app = express(); // Cria a instância do servidor Express
const PORT = 3000; // Define a porta do servidor
const apiKey = 'ca889b600944645ab4be9db1d2cd7d99'; // Sua chave da API OpenWeatherMap

// Habilita CORS, permitindo que qualquer site acesse a API
app.use(cors());

// ==========================
// ROTA GET /weather
// ==========================
app.get('/weather', async (req, res) => {
    // Captura os parâmetros da URL: ?city=Lisboa&country=PT
    const { city, country } = req.query;
    // Validação: se cidade ou país não forem informados, retorna erro 400
    if (!city || !country) {
        return res.status(400).json({ error: 'Informe cidade e país.' });
    }

    try {
        // Faz requisição à API OpenWeatherMap usando axios
        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric&lang=pt_br`
        );
        
        // Armazena os dados recebidos da API
        const data = response.data;
        
        // Extrai informações importantes
        const temperature = data.main?.temp ?? 0; // Tempera
        const humidity = data.main?.humidity ?? 0;
        const windSpeed = data.wind?.speed ? data.wind.speed * 3.6 : 0; // m/s → km/h
        const rainChance = data.rain?.['1h'] ?? 0;
        const weatherCondition = data.weather?.[0]?.description ?? 'Desconhecido';

        return res.json({ temperature, humidity, windSpeed, rainChance, weatherCondition });

    } catch (err) {
        if (err.response?.status === 404) {
            return res.status(404).json({ error: 'Cidade não encontrada.' });
        }
        return res.status(500).json({ error: 'Erro ao obter dados do clima.' });
    }
});

// =======================
// INICIA O SERVIDOR
// =======================
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});