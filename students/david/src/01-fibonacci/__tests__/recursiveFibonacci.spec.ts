import assert from 'node:assert';
import { describe, it } from 'mocha';

import recursiveFibonacci from '../recursiveFibonacci';

describe('Given the function recursiveFibonacci', () => {
  describe('When is called with a negative number', () => {
    it('Then it should send `Number must be positive or equal to zero`', () => {
      let consoleMessage:string | number;
      const enteredNumber = -3;

      consoleMessage = recursiveFibonacci(enteredNumber);

      assert.equal(consoleMessage,'Number must be positive or equal to zero');
    });
  });

  describe('When is called with a float number', () => {
    it('Then it should send `Number must be an integer`', () => {
      let consoleMessage:string | number;
      const enteredNumber = 2.2;

      consoleMessage = recursiveFibonacci(enteredNumber);

      assert.equal(consoleMessage,'Number must be an integer');
    });
  });

  describe('When is called with a 0', () => {
    it('Then it should return 0', () => {
      let fibonacciNumber:string | number;
      const enteredNumber = 0;

      fibonacciNumber = recursiveFibonacci(enteredNumber);

      assert.equal(fibonacciNumber,0);
    });
  });

  describe('When is called with a 2', () => {
    it('Then it should return 1', () => {
      let fibonacciNumber:string | number;
      const enteredNumber = 2;

      fibonacciNumber = recursiveFibonacci(enteredNumber);

      assert.equal(fibonacciNumber,1);
    });
  });

  describe('When is called with a 11', () => {
    it('Then it should return 89', () => {
      let fibonacciNumber:string | number;
      const enteredNumber = 11;

      fibonacciNumber = recursiveFibonacci(enteredNumber);

      assert.equal(fibonacciNumber,89);
    });
  });
});