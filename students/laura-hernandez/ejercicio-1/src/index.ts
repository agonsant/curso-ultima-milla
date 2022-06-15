const recursiveFibonacci = (n: number) => {
  let fib: number;
  let fibMin1: number = 1;
  let fibMin2: number = 0;

  if (n < 0) {
    console.log("n must be a positive integer");
    fib = NaN;
    return fib;
  } else {
    if (n === 0) {
      fib = 0;
      console.log(`fib(${n}) = ` + fib);
      return fib;
    }
    if (n === 1) {
      fib = 1;
      console.log(`fib(${n}) = ` + fib);
      return fib;
    }
    if (n === 2) {
      fib = fibMin1 + fibMin2;
      console.log(`fib(${n}) = ` + fib);
      return fib;
    }
    if (n >= 3) {
      fib = recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
      console.log(`fib(${n}) = ` + fib);
      return fib;
    }
  }
}

export default recursiveFibonacci;

console.log("Calling function recursiveFibonacci(-5)");
recursiveFibonacci(-5);
console.log("Calling function recursiveFibonacci(4)");
recursiveFibonacci(4);
console.log("Calling function recursiveFibonacci(10)");
recursiveFibonacci(10);
console.log("Calling function recursiveFibonacci(20)");
recursiveFibonacci(20);
// console.log("Calling function recursiveFibonacci(50)");
// recursiveFibonacci(50);
// console.log("Calling function recursiveFibonacci(1000)");
// recursiveFibonacci(1000);
