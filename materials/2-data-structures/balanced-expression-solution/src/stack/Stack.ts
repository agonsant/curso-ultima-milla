
/**
 * Data structure 
 */
export class Stack<T> {

    private data: T[] = [];

    size(): number{
        return this.data.length;
    }

    isEmpty(): boolean {
        return this.size() === 0;
    }

    /**
     * Adds a new element in the stack
     * @param {T}: the item to be added
     * @return {number}: the new stack size
     * */
    push(item: T): number{
        return this.data.push(item);
    }

    getLastElement(): T{
        return this.data[this.size()-1];
    }

    pop(): T | undefined{
        return this.data.pop();
    }
}
