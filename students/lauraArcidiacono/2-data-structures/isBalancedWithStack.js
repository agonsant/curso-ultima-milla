class Stack {

    dataStack = [];

    size(){
      return this.dataStack.length;
    }

    /**
     * Adds a new element in the stack
     * @param {any}: the item to be added
     * @return {number}: the new stack size
     * */
    push(item) {
      return this.dataStack.push(item);
    }

    /**
     * Get the last element of the stack
     * @return {string}: the last element of the stack
     * */
    getLastElement(){
      return this.dataStack[this.size()-1];
    }

    /**
     * Remove the last element of the stack
     * @return {Array}: the new stack
     * */
    pop(){
      return this.dataStack.pop();
    }

    transformToArray(expresion){
      const arrayExpresion = Array.from(expresion);
      return arrayExpresion;
    }

    verifyCompatibility(itemA, itemB) {
      if (itemA === '{' && itemB === '}') return true;
      if (itemA === '[' && itemB === ']') return true;
      if (itemA === '(' && itemB === ')') return true;

      return false;
    }

    isBalancedStack(expresion){
      this.dataStack = []
      const arrayExpresion = this.transformToArray(expresion);
      if(arrayExpresion.length / 2 !== 0) return false;
      arrayExpresion.forEach(item => {
        const lastItem = this.getLastElement()
        this.dataStack.push(item);
        if(this.verifyCompatibility(lastItem, item)) {
          this.dataStack.pop()
          this.dataStack.pop()
        }
      })
      if(this.dataStack.length === 0) {
        return true
      }
      return false
    }

  }

  const myDataStack = new Stack();

  console.log('A', myDataStack.isBalancedStack('[({[]})]'))
  console.log('B', myDataStack.isBalancedStack('[{}'))
  console.log('C', myDataStack.isBalancedStack('()'))
  console.log('D', myDataStack.isBalancedStack('([)]'))
  console.log('E', myDataStack.isBalancedStack('()()'))
  console.log('F', myDataStack.isBalancedStack('[(({}))}]'))
