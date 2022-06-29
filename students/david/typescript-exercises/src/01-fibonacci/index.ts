import iterativeFibonacci from "./iterativeFibonacci.js";
import recursiveFibonacci from "./recursiveFibonacci.js";

const numberOfIterations = 1000;
const numberOfRecursive = 30;

console.time('Iterative time');
const showIterativeMethod: bigint = iterativeFibonacci(numberOfIterations);
console.timeEnd('Iterative time');
console.time('Recursive time');
const showRecursiveMethod: bigint = recursiveFibonacci(numberOfRecursive);
console.timeEnd('Recursive time');

console.log('Iterative: ',showIterativeMethod);
console.log('Recursive: ',showRecursiveMethod);