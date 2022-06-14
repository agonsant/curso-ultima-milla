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