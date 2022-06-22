const isBalancedExpression  = (expression: string) : Boolean => {
  // create the empty stack
  let stack: any[] = [];
  //iterate over the expression
  for(let character of expression) {
    if ( character === "(" || character === "{" || character === "[") {
      stack.push(character);
    } else {
      // check the last element
      let lastElement = stack.pop();
      console.log("The last element is", lastElement);
      //check balanced character  
      switch(character){
        case ")": 
          if (lastElement === "{" || lastElement === "[") {
            return false;
          }
          break;
        case "}":
          if (lastElement === "(" || lastElement === "[") {
            return false;
          }
          break;
        case "]":
          if (lastElement === "(" || lastElement === "{") {
            return false;
          } 
          break;
      }
    }
    console.log("The stack is", stack);
  }
  return (stack.length === 0);
}; 

console.log(isBalancedExpression("([{}]"));