# Introducción a la complejidad algorítmica

Nos ayuda a determinar y a comparar dos algoritmos y definir cuál puede ser mejor.

Dentro de la complejidad algorítmica una de las que tenemos es la complejidada asintótica (Notación Big O)

Este tipo de complejidad nos ayuda a definir **como va a evolucionar nuestro algoritmo en el tiempo, según crezca el tamaño de los datos**

![Graficas con indicadores](https://miro.medium.com/max/1200/1*5ZLci3SuR0zM_QlZOADv8Q.jpeg)

## ¿Como calculo en que función está mi algoritmo?

```js

// cualquier operación o expresión vale 1 punto

const add = 3+4; // 2 puntos (aritmética + asignación) ==> O(1)

// bucles tienen un valor del nº de vueltas que recorren * cuerpo del bucle + las 3 expresinoes del bucle

/* Supongamos que tenemos un array de n elementos */
for(let i=0; i<arr.length; i++ /*i=i+1*/){
    console.log(arr[i]);
}

/**
 * Calculo de la complejidad:
 *  - init === 1 punto
 *  - Por cada vuelta tengo: (n veces siendo n la longitud del array)
 *      * 1 punto de condición de salida
 *      * X puntos del cuerpo del bucle = 2 puntos (obtención + console.log===suposición peligrosa)
 *      * 2 puntos
 * 
 * ¿Cual es la complejidad del bucle?
 * 1+n*5 == 5n+1 ==> Se quitan los coeficientes constantes ==> O(n)
 */


/**
 * Supongamos que tenemos un array de arrays (Tablero de ajedrez (nxn))
 * 
 * for(let i=0; i<arr.length; i++){
 *     for(let j=0; j<arr[i].length; j++){
 *          arr[i][j]+=3; // 4 puntos (2 accesos+suma+asignación)
 *     }
 * }
 * 
 * Bucle interno
 *  - init: 1
 *  - Cuerpo: 2 + 4 + 2 = 8*n === 8*n+1
 * 
 * Bucle externo
 *  - init: 1
 *  - cuerpo: (1 + (8*n+1) + 2)*n = (8*n+4)*n = n*n =O(n^2)
 * 
 * 
 * for(let i=0; i<arr.length; i++){
 *     
 * }
 * arr.map(e => e+1); // O(n) 
 * 
 * arr.some(e => e===1); // 
 * arr.every(e => e===1); // 
 */


```

Se distinguen 2 posibles casos:

- Complejidad en el caso mejor
- Complejidad en el caso peor

En el caso de `some` y `every`.

Caso Mejor === O(1)
Caso Peor === O(n)

```js
class Board(){

    private board: string[][] = [[],[],[]];
    private isEmpty: boolean = true;


    isBoardEmpty():boolean{
        // return this.board.every(e => e.every(c => c===undefined)); // Worst Case O(n^2)
        return isEmpty; // O(1)
    }

    addToBoard(player:Player, position:number):void {
        // logic to add to board
        this.isEmpty = false; // O(1)
    }

    clearBoard(): void{
        this.board = [[],[],[]]; // O(1)
        this.isEmpty=true; //O(1)
    }

}

```

## Ejercicio

Construir una versión recursiva y una iterativa de una función que dado un número `n` devuelve el `fib(n)`. (Testing y TypeScript).

Intentad calcular la complejidad y Responder a la siguiente pregunta:

¿Cual tarda más? Pista: Probarlo con n=4; n=10; n=20; n=50; n=1000.
