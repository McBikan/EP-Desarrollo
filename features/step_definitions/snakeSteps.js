const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let game;
let score = 0;
let snake;
let apple;
let backgroundColor;

Given('que el juego ha iniciado', function () {
    game = {
        snake: { position: { x: 0, y: 0 }, speed: 5 },
        apple: { position: { x: 0, y: 1 } }
    };
    score = 0; // Reiniciar puntaje
    backgroundColor = 'white'; // Color inicial
    snake = game.snake; // Obtener la serpiente
});

Given('que la serpiente está cerca de una manzana', function () {
    // Colocar la serpiente justo en la posición de la manzana
    snake.position = { x: game.apple.position.x, y: game.apple.position.y - 1 }; 
});

When('la serpiente se mueve y come la manzana', function () {
    // Mover la serpiente a la posición de la manzana
    snake.position = { x: game.apple.position.x, y: game.apple.position.y };
    
    // Comprobar si la serpiente ha "comido" la manzana
    if (snake.position.x === game.apple.position.x && snake.position.y === game.apple.position.y) {
        score += 1; // Incrementar puntaje
        snake.speed += 1; // Aumentar velocidad
        backgroundColor = 'green'; // Cambiar color de fondo
        game.apple.position = { x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10) }; // Reubicar la manzana
    }
});

Then('el puntaje debe incrementarse en 1', function () {
    assert.strictEqual(score, 1, 'El puntaje no ha incrementado correctamente');
});

Then('la velocidad de la serpiente debe aumentar', function () {
    assert.ok(snake.speed > 5, 'La velocidad de la serpiente no ha aumentado'); // Verifica que la velocidad haya aumentado
});

Then('el color de fondo debe cambiar', function () {
    assert.notStrictEqual(backgroundColor, 'white', 'El color de fondo no ha cambiado');
});
