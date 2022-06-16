const recursiveFibonacci = (number:number):bigint => {
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
    return recursiveFibonacci(number - 1) + recursiveFibonacci(number - 2);
  };

export default recursiveFibonacci;

/**
 * Complexity:
 * TOTAL: ==> O(X^n)
 */