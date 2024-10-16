# EP DESARROLLO

## Introducción:

| **ID** | **Historia de Usuario / Tarea**                                                                    | **Prioridad** | **Puntos de Historia** | **Sprint**   | **Enlace**                                             |
|--------|----------------------------------------------------------------------------------------------------|---------------|------------------------|--------------|-------------------------------------------------------|
| 1      | Creación de la interfaz del juego                                                                  | P0            | 3                      | Sprint 1     | [Ver Tarea](https://github.com/McBikan/EP-Desarrollo/issues/1) |
| 2      | Implementación de la lógica de juego                                                                | P0            | 3                      | Sprint 1     | [Ver Tarea](https://github.com/McBikan/EP-Desarrollo/issues/2) |
| 3      | Creación de un segundo snake                                                                         | P0            | 7                      | Sprint 2     | [Ver Tarea](https://github.com/McBikan/EP-Desarrollo/issues/3) |
| 4      | Implementación del despliegue de docker containers para la app de juego                             | P0            | 2                      | Sprint 2     | [Ver Tarea](https://github.com/McBikan/EP-Desarrollo/issues/4) |
| 5      | Implementar la monitorización con prometheus y grafana                                             | P1            | 5                      | Sprint 3     | [Ver Tarea](https://github.com/McBikan/EP-Desarrollo/issues/5) |
| 6      | Implementar la BD para guardar los registros de juego                                               | P1            | 4                      | Sprint 3     | [Ver Tarea](https://github.com/McBikan/EP-Desarrollo/issues/6) |
| 7      | Implementar el juego multijugador (2 players)                                                      | P0            | 5                      | Sprint 3     | [Ver Tarea](https://github.com/McBikan/EP-Desarrollo/issues/7) |
| 8      | Crear un ranking de los mejores puntajes                                                            | P2            | 5                      | Sprint 3     | [Ver Tarea](https://github.com/McBikan/EP-Desarrollo/issues/9) |
| 9      | Implementación 1er power up (Poción: eliminación de 1 cuerpo)                                       | P2            | 3                      | Sprint 2     | [Ver Tarea](https://github.com/McBikan/EP-Desarrollo/issues/10) |
| 10     | Implementación de las pruebas BDD con cucumber                                                      | P1            | 3                      | Sprint 3     | [Ver Tarea](https://github.com/McBikan/EP-Desarrollo/issues/11) |


## Sprint 1:

| **ID** | **Historia de Usuario / Tarea**                                                                    | **Prioridad** | **Puntos de Historia** | **Sprint**   | **Enlace**                                             |
|--------|----------------------------------------------------------------------------------------------------|---------------|------------------------|--------------|-------------------------------------------------------|
| 1      | Creación de la interfaz del juego                                                                  | P0            | 3                      | Sprint 1     | [Ver Tarea](https://github.com/McBikan/EP-Desarrollo/issues/1) |
| 2      | Implementación de la lógica de juego                                                                | P0            | 3                      | Sprint 1     | [Ver Tarea](https://github.com/McBikan/EP-Desarrollo/issues/2) |


## Intefaz del juego:
Contamos con el archivo index.html el cuál crea contenedores donde ocurrirá el juego, se mostrará el puntaje, tiempo y menú:
<body>
    <div class="container">
        <canvas id="canvas"></canvas>
        <span class="score">0</span>
        <span class="time">0</span>
        <div class="menu">
            <h2>SNAKE</h2>
            <div class="characters">
                <canvas id="snake-1"></canvas>
                <canvas id="snake-2"></canvas>
            </div>
            <p>Selecciona un personaje</p>
        </div>
    </div>

en el style.css le damos una mejora a la interfaz a nivel visual.

## Implementación de la lógica de juego:
Tenemos 3 class y 2 funciones para aplicar la lógica del juego:
- class Apple
- class SnakeBody
- class Snake
- function init
- function update
