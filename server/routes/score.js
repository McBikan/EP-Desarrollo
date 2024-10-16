const express = require('express');
const router = express.Router();
const Score = require('../models/score'); // Importa el modelo desde su archivo

// Ruta para guardar el puntaje
router.post('/save-score', async (req, res) => {
    const { username, score, time } = req.body;

    const newScore = new Score({ username, score, time });

    try {
        await newScore.save();
        res.status(200).json({ message: 'Score saved successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error saving score' });
    }
});

module.exports = router;
