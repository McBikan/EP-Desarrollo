Feature: Incrementar puntaje al comer manzanas

  Scenario: La serpiente come una manzana y el puntaje aumenta
    Given que el juego ha iniciado
    And que la serpiente está cerca de una manzana
    When la serpiente se mueve y come la manzana
    Then el puntaje debe incrementarse en 1
    And la velocidad de la serpiente debe aumentar
    And el color de fondo debe cambiar
