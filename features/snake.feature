Feature: Incrementar puntaje al comer manzanas

  Scenario: La serpiente come una manzana y el puntaje aumenta
    Given que el juego ha iniciado
    And que la serpiente está cerca de una manzana
    When la serpiente se mueve y come la manzana
    Then el puntaje debe incrementarse en 1

  Scenario: La velocidad de la serpiente aumenta al comer una manzana
    Given que el juego ha iniciado
    And que la serpiente está cerca de una manzana
    When la serpiente se mueve y come la manzana
    Then la velocidad de la serpiente debe aumentar

  Scenario: El color de fondo cambia al comer una manzana
    Given que el juego ha iniciado
    And que la serpiente está cerca de una manzana
    When la serpiente se mueve y come la manzana
    Then el color de fondo debe cambiar
