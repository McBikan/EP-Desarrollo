const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const scoreRoutes = require('./routes/score'); // Asegúrate de que la ruta sea correcta

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json()); // Permite recibir datos en formato JSON

app.use('/api', scoreRoutes); // Usa la ruta para guardar el puntaje

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/snake-game')
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('No se pudo conectar a MongoDB:', err));

// Definición del modelo
const ScoreSchema = new mongoose.Schema({
    score: Number,
    time: Number,
    username: String // Puedes agregar el nombre de usuario si es necesario
});

const Score = mongoose.model('Score', ScoreSchema);

// Ruta para guardar el puntaje
app.post('/api/scores', async (req, res) => {
    const { score, time, username } = req.body;

    const newScore = new Score({ score, time, username });
    await newScore.save();
    res.status(201).send(newScore);
});

// Servir archivos estáticos desde la carpeta actual
app.use(express.static(path.join(__dirname,'../client'))); // Esto sirve los archivos en el directorio actual

// Manejar la ruta raíz
app.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname, '../client/index.html')); // Enviar el archivo index.html
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
