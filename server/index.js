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
mongoose.connect('mongodb://host.docker.internal:27017/snake-game', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('No se pudo conectar a MongoDB:', err));

// Servir archivos estáticos desde la carpeta actual
app.use(express.static(path.join(__dirname, '../client')));

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
