export const fibrec  = (n:number) : number => {
  if ( n <= 1) {
    return n
  } else {
    return fibrec(n-1) + fibrec(n-2)  
  }
}; 
console.time('Time of the fibrec')
let res = fibrec(2);
console.timeEnd('Time of the fibrec')
// console.log(res);


export const fibit = (n:number) : number => {
    // Define an array to store Fibonacci numbers
    let seq = new Array(n+1); 

    // Fill in the positions in the sequence with the Fibonacci numbers
    seq[0] = 0;
    seq[1] = 1;
    for (let i:number = 2; i <= n; i++) {
      seq[i]=seq[i-1]+seq[i-2];
      console.log('i', i, 'seq[i]', seq[i]);
    }

    return seq[n]
}
console.time('Time of the fibit')
let res2 = fibit(9);
console.timeEnd('Time of the fibit')
console.log(res2);