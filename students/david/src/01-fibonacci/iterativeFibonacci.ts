const iterativeFibonacci = (number:number):number | string => {
  let fibonacciNumber:number;
  let previousLastFibonacciNumber = 1;
  let lastFibonacciNumber = 1;
  
  if(number < 0) {
    return ('Number must be positive or equal to zero');
  };
  if(!Number.isInteger(number)) {
    return ('Number must be an integer');
  };
  if(number === 0) {
    return 0;
   };
   if(number === 1 || number === 2) {
    return 1;
   };
  for(let i = 2; i < number ; i++) {
    fibonacciNumber = lastFibonacciNumber + previousLastFibonacciNumber;
    previousLastFibonacciNumber = lastFibonacciNumber;
    lastFibonacciNumber = fibonacciNumber;
  };

  return fibonacciNumber;
};

export default iterativeFibonacci;

/**
 * Complexity:
 * -Function definition: 2
 * -Initialize vars: 3
 * -Ifs: 5*2 = 10
 * -Loop: number * (for header(1+1+2)+ for body(2+2+2)) = 10*number
 * -Return: 1
 * TOTAL: 10*number + 16 ==> 10*n ==> O(n)
 */