const recursiveFibonacci = (n: number) => {
  let fib: number;
  let fibMin1: number = 1;
  let fibMin2: number = 0;

  if (n === 0) {
    fib = 0;
    console.log(fib);
    return fib;
  }
  if (n === 1) {
    fib = 1;
    console.log(fib);
    return fib;
  }
  if (n === 2) {
    fib = fibMin1 + fibMin2;
    console.log(fib);
    return fib;
  }

  if (n >= 3) {
    fib = recursiveFibonacci(n-1) + recursiveFibonacci(n-2);
    console.log(`fib(${n}) = ` + fib);
    return fib;
  }
  
}

console.log("Calling function recursiveFibonacci(4)");
recursiveFibonacci(4);
console.log("Calling function recursiveFibonacci(6)");
recursiveFibonacci(6);

// recursiveFibonacci(10);
// recursiveFibonacci(20);
// recursiveFibonacci(50);
// recursiveFibonacci(1000);