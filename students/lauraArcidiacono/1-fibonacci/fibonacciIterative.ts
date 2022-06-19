const fibonacciIterative = (n: number): number[] => {
    const fibonacciSecuence = [0, 1]; // 1

    for(let i=2; i <= n; i++) { // 1 + 2
        fibonacciSecuence[i] = fibonacciSecuence[i - 1] + fibonacciSecuence[i - 2]
        //         n*                 2                 +           2
    }

    return fibonacciSecuence; //4 + n*4 --> O(n)
 }

console.log(fibonacciIterative(4));
console.log(fibonacciIterative(10));
console.log(fibonacciIterative(20));