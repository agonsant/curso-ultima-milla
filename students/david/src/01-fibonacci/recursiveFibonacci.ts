const recursiveFibonacci = (
  number:number,
  fibonacciNumber:number = null,
  lastFibonacciNumber = 1,
  previousLastFibonacciNumber = 1,
  recursiveCounter = 2
  ):number | string => {
  
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
  if (recursiveCounter < number) {
  fibonacciNumber = lastFibonacciNumber + previousLastFibonacciNumber;
  previousLastFibonacciNumber = lastFibonacciNumber;
  lastFibonacciNumber = fibonacciNumber;
  recursiveCounter += 1;
  return recursiveFibonacci(number,fibonacciNumber,lastFibonacciNumber,previousLastFibonacciNumber,recursiveCounter);
  }
  return fibonacciNumber;
};

export default recursiveFibonacci;

/**
 * Complexity:
 * -Function definition: 5
 * -Ifs: 4*2 = 8
 * -Recursivity: number * (header(1) + body(2+2+2+2) + return(5)) = 14*number
 * -Return: 1
 * TOTAL: 14*number + 14 ==> 14*n ==> O(n)
 */