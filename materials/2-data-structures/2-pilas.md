# Pilas (Stacks)

Es una estructura de datos que nos ayuda a tener muy buenas complejidades cuando quiero introducir un dato al final (Operacion de inserción) y obtener un dato del final (Lectura/Borrado)

Tengo 5 operaciones principales:

- Crear una pila vacia: O(1)
- Consultar el tamaño de la pila: O(1)
- Insertar/apilar (comunmente se llama push): O(1)
- Consultar el ultimo valor: O(1)
- Obtener/elimnar/desapilar (pop): O(1)

## ¿Como se implementa una pila?

```ts

class Stack {

    private data: any[] = [];

    size(): number{
        return this.data.length;
    }

    /**
     * Adds a new element in the stack
     * @param {any}: the item to be added
     * @return {number}: the new stack size
     * */
    push(item: any): number{
        return this.data.push(item);
    }

    getLastElement(): any{
        return this.data[this.size()-1];
    }

    pop(): any{
        return this.data.pop();
    }

}

const s = new Stack();
s.// las 4 operaciones que hemos implementad

```
