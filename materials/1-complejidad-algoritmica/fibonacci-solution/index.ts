
  /**
   Demo TS Playground = https://www.typescriptlang.org/play?target=7#code/FAAhHoCpNMDECWAjAFABgJQgLwjQblhEVQEYtdTCxjkUA7C21egWnJAGpmHWAmLMGCRwwcOBABRegBcATgEMQAV3oh6ygLZIApnJABPEAGcFAGx0q1AIQQBzAJKyxEgPIo+APUYmEO+gAmAPbqIDpm6lp6IQGWAGbIIEoAxubJymYKcsBxqskyCEFqCUgASjrJDABcGtp6GFUgSPYIsgDeRCAIcSgAhAByWrpyAHQIxk4yOnZ6DFgAPvPqADyYIHI6MspyNvaTKP0K-Rj4EBKZ9ABeWVZKOgAeyToADsmF9J3dDCDLIALrm22u0csjmp3ETQUxksqWhxk6Gy2OxAJXKlTYHG4qIqvAE4LcKExIHc2PR7AwWG4JOQaNxFOAAF8hBD3IwcnkCkUUcgHDJqrVhg0mi1ZCAOjQuj0BkM9GMJrJprMfIsVmtEUCQLYQXzDsd8SALtd9Ko7o8Xm8ip8empfv91citftGPqkFCYW74RKLDJuUgAPr0P2kHCavag8j6kq8cidb2+gN+vghx2gzCRuhsARCCVxIJyFBxhDYPinBDLbD0UucTgYcUSmjJIrGH0KZT3EMlBNUTo55Bdjt9wPBrGDxPUetgTuBpO4Vv3cdgJkIwHIqdBwiMoA
   Fib(0) = 0;
   Fib(1) = 1;
   Fib(n) = Fib(n-1) + Fib(n-2) 

*/
// Entra un number y sale un BigInt
// O(2^n) siendo n el numero de fib a calcular
function fibRec(n:number): bigint{
    if(!Number.isInteger(n) || n<0) return BigInt(NaN); // lanzar una excepcion
    if(n < 2) return BigInt(n); // base cases
    return fibRec(n-1) + fibRec(n-2); // O(1) + O(fibRec(n-1)) + O(fibRec(n-2))
}

// O(n)
function fibIt(n:number): bigint {
    if(!Number.isInteger(n) || n<0) return BigInt(NaN); // lanzar una excepcion
    if(n < 2) return BigInt(n); // base cases
    let fib_n_1 = BigInt(1); // fib(n-1)
    let fib_n_2 = BigInt(0); // fib(n-2)

    for(let i=2; i<=n; i++){
        const aux = fib_n_1;
        fib_n_1 = fib_n_1 + fib_n_2;
        fib_n_2 = aux;
    }

    return fib_n_1;

}