# **Spot It!**: The Poisoned Gift

## Descripción del problema

Para el presente proyecto se ha propuesto la creación de una de las modalidades del juego Spot it!, el cual cuenta con al menos 5 modalidades de juegos distintas. Dichas modalidades son las siguientes:

- The Tower
- The Well
- Hot Potato
- The Poisoned Gift
- Triplet

Todas las modalidades usan las mismas cartas. La principal funcionalidad del juego es poder asociar los elementos en cada una de las cartas, las cuales incluyen varios dibujos de distintos objetos.

Para el caso de nuestro proyecto, se nos ha asignado el desarrollo de la modalidad **The Poisoned Gift**, cuya explicación se dará más adelante.

### Requerimientos técnicos

Debido a que es un juego para varias personas, debe de crearse un proyecto que sea capaz de permitir varios jugadores de forma simultanea. Para esto será necesario el uso de un servidor configurado para tal tarea. Será necesario el control de concurrencia para que los jugadores tengan las mismas posibilidades a la hora de jugar.

Será necesaria una interfaz gráfica que permita al usuario visualizar las cartas propias, las de sus rivales y las del maso principal. Son necesarios aspectos visuales com nombres, botones y títulos. Serán necesarias animaciones para que el juego indique las acciones realizadas y que los usuarios sean capaces de comprender en tiempo real qué ha sucedido.

## Adaptaciones

Para el proyecto actual se va a desarrollar la adaptación o modalidad del juego **The Poisoned Gift(_El Regalo Envenenado_)**, la cual se describe a continuación:

### Preparación del juego

Se deben mezclar las cartas y repartir una carta boca abajo a cada jugador. El resto de las cartas se coloca como una pila en el centro de la mesa, boca arriba.

### Objetivo del juego

Intentar tener la menor cantidad de cartas posibles.

### ¿Cómo jugarlo?

Al iniciar, todos los jugadores voltean la carta que se les repartió. Una vez que todos tienen a la vista las cartas de sus rivales, los jugadores deben encontrar una coincidencia entre alguno de los elementos de la carta de la pila central y la de algún elemento de las cartas de los rivales. Si se visualiza alguna, se debe de indicar cuál es la coincidencia (por ejemplo, gritar "Árbol"). Al hacerlo, el jugador que encontró la coincidencia debe tomar la carta de la pila central y entregarla al jugador rival. Este es el "regalo envenenado", ya que le da una carta no deseada a un jugador.

Posteriormente, se continúa con la carta siguiente en la pila central. EL juego continúa hasta que se acaben las cartas de la pila central.

### ¿Cómo se gana?

Una vez acabada la pila central, el jugador con menos cartas en su mano será declarado el ganador de la partida.

## Créditos

Para la elaboración de este proyecto participaron los estudiantes:

---

Brayan Sandí Barrantes

B77166

brayan.sandi@ucr.ac.cr

---

Hellen Fuentes Artavia

B93082

hellen.fuentesartavia@ucr.ac.cr

---

Carlos Cartín Cascante

B71677

carlos.cartincascante@ucr.ac.cr

---

Sung Jae Moon

B85176

sung.moon@ucr.ac.cr

---
