# Data Structures Exercises

1. Contestar a las siguientes preguntas:
   - ¿Por qué digo que no existen los arrays en JavaScript? ¿Que son?
   - ¿Un Set permite añadir objetos diferens con los mismos valores y propiedades?
     - Pista ¿Porque estas comprobaciones dan false? ¿Como se comporta esto en Memoria RAM?
       EJ: let a = { b: 3} ---> undefined
       let c = { b: 3} ---> undefined
       a == c ---> false
       a === c ---> false
   - ¿Porque hay WeakMap y WeakSet? en que se diferencian?
     - [WeakMap And WeakSet](https://javascript.info/weakmap-weakset)

2. Construir una función que dado un string comprobar si una expresion de parentesis, corchetes y llaves juntas es correcta (ejemplo: `[({[]})]` seria true // `[{}` seria false)
          Entrada: string
          Salida: boolean si la cadena es correcta
          Ejemplos:
            - `[({[]})]` --> true
            - `[{}` --> false
            - `()` --> true
            - `([)]` --> false
            - `()()` --> true
            - `[(({}))}]` --> false
