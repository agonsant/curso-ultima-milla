import iterativeFibonacci from "./iterativeFibonacci";
import recursiveFibonacci from "./recursiveFibonacci";

let numberOfIterations:number;
let numberOfRecursive:number;

numberOfIterations = 7000;
numberOfRecursive = 42;
console.time('Iterative time');
const showIterativeMethod: bigint = iterativeFibonacci(numberOfIterations);
console.timeEnd('Iterative time');
console.time('Recursive time');
const showRecursiveMethod: bigint = recursiveFibonacci(numberOfRecursive);
console.timeEnd('Recursive time');

console.log('Iterative: ',showIterativeMethod);
console.log('Recursive: ',showRecursiveMethod);