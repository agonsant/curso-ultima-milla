import iterativeFibonacci from "./iterativeFibonacci";
import recursiveFibonacci from "./recursiveFibonacci";

let numberOfIterations:number;

numberOfIterations = 1000;
console.time('Iterative time');
const showIterativeMethod: number | string = iterativeFibonacci(numberOfIterations);
console.timeEnd('Iterative time');
console.time('Recursive time');
const showRecursiveMethod: number | string = recursiveFibonacci(numberOfIterations);
console.timeEnd('Recursive time');

console.log('Iterative: ',showIterativeMethod);
console.log('Recursive: ',showRecursiveMethod);