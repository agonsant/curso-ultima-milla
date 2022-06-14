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