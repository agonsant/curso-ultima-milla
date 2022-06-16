import assert from 'node:assert';
import { describe, it } from 'mocha';

import iterativeFibonacci from '../iterativeFibonacci';

describe('Given the function iterativeFibonacci', () => {
  describe('When is called with a negative number', () => {
    it('Then it should send `Number must be positive or equal to zero`', () => {
      let consoleError:bigint;
      const enteredNumber = -3;
      const { message} = new assert.AssertionError({message:'Number must be positive or equal to zero'});
      
      try {
      consoleError = iterativeFibonacci(enteredNumber);
      }
      catch (error){
        assert.equal(error.message, message);
        console.log(error.message);
      }
    });
  });

  describe('When is called with a float number', () => {
    it('Then it should send `Number must be an integer`', () => {
      let consoleError:bigint;
      const enteredNumber = 2.2;
      const { message} = new assert.AssertionError({message:'Number must be an integer'});
      
      try {
      consoleError = iterativeFibonacci(enteredNumber);
      }
      catch (error){
        assert.equal(error.message, message);
        console.log(error.message);
      }
    });
  });

  describe('When is called with a 0', () => {
    it('Then it should return 0', () => {
      let fibonacciNumber:bigint;
      const enteredNumber = 0;

      fibonacciNumber = iterativeFibonacci(enteredNumber);

      assert.equal(fibonacciNumber,0);
    });
  });

  describe('When is called with a 2', () => {
    it('Then it should return 1', () => {
      let fibonacciNumber:bigint;
      const enteredNumber = 2;

      fibonacciNumber = iterativeFibonacci(enteredNumber);

      assert.equal(fibonacciNumber,1);
    });
  });

  describe('When is called with a 11', () => {
    it('Then it should return 89', () => {
      let fibonacciNumber:bigint;
      const enteredNumber = 11;

      fibonacciNumber = iterativeFibonacci(enteredNumber);

      assert.equal(fibonacciNumber,89);
    });
  });
});