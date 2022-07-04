const fibonacciRecursive = (n: number): number => {
    if(n < 2) return n; // 1
    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);

}

// n=4; n=10; n=20; n=50; n=1000
console.log(fibonacciRecursive(4));
console.log(fibonacciRecursive(10));
console.log(fibonacciRecursive(20));