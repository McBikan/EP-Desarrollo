const mongoose = require('mongoose');

// Definir el esquema
const scoreSchema = new mongoose.Schema({
    username: { type: String, required: true },
    score: { type: Number, required: true },
    time: { type: Number, required: true },
});

// Crear el modelo
const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;
