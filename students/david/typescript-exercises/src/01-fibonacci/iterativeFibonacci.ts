/**
 * A function for given a number it return its fibonacci number using an iterative method
 * @param number: Number The input value.
 * @returns {bigint}: The fibonnaci number of the input value
 */

const iterativeFibonacci = (number:number):bigint => {
  let fibonacciNumber:bigint;
  let previousLastFibonacciNumber = BigInt(1);
  let lastFibonacciNumber = BigInt(1);
  
  if(number < 0) {
    throw new Error ('Number must be positive or equal to zero');
  };
  if(!Number.isInteger(number)) {
    throw new Error ('Number must be an integer');
  };
  if(number === 0) {
    return BigInt(0);
   };
   if(number <= 2) {
    return BigInt(1);
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