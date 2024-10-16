const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let game;
let score = 0;
let initialSpeed;
let snake;
let apple;
let backgroundColor;

function startGame() {
    return {
        snake: {
            position: { x: 0, y: 0 },
            speed: 5
        },
        apple: { position: { x: 0, y: 1 } }
    };
}

function placeApple() {
    return { position: { x: Math.floor(Math.random() * 10), y: Math.floor(Math.random() * 10) } };
}

function increaseSpeed() {
    snake.speed += 1;
}

function changeBackgroundColor() {
    return 'green';
}

Given('que el juego ha iniciado', function () {
    game = startGame();
    score = 0;
    snake = game.snake;
    apple = placeApple();
    backgroundColor = 'white';
    initialSpeed = snake.speed;
});

Given('que la serpiente está cerca de una manzana', function () {
    snake.position = { x: apple.position.x, y: apple.position.y - 1 };
});

When('la serpiente se mueve y come la manzana', function () {
    if (snake.position.x === apple.position.x && snake.position.y === apple.position.y) {
        score += 1;
        increaseSpeed();
        backgroundColor = changeBackgroundColor();
        apple = placeApple();
    }
});

Then('el puntaje debe incrementarse en 1', function () {
    assert.strictEqual(score, 1, 'El puntaje no ha incrementado correctamente');
});

Then('la velocidad de la serpiente debe aumentar', function () {
    assert.ok(snake.speed > initialSpeed, 'La velocidad de la serpiente no ha aumentado');
});

Then('el color de fondo debe cambiar', function () {
    assert.notStrictEqual(backgroundColor, 'white', 'El color de fondo no ha cambiado');
});
