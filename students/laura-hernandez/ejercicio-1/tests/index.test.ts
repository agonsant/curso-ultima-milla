import  recursiveFibonacci from "../src/index";

describe("Given a recursiveFibonacci function", () => {
  describe("When it receives a 1", () => {
    it("Then it should return a 1", () => {
      const n = 1;  

      const resultFibonacciFunction = recursiveFibonacci(n);
      const expectedResult = 1;

      expect(resultFibonacciFunction).toBe(expectedResult);
    })
  })

  describe("When it receives a 2", () => {
    it("Then it should return a 1", () => {
      const n = 2;  

      const resultFibonacciFunction = recursiveFibonacci(n);
      const expectedResult = 1;

      expect(resultFibonacciFunction).toBe(expectedResult);
    })
  })

  describe("When it receives a 3", () => {
    it("Then it should return a 2", () => {
      const n = 3;  

      const resultFibonacciFunction = recursiveFibonacci(n);
      const expectedResult = 2;

      expect(resultFibonacciFunction).toBe(expectedResult);
    })
  })

  describe("When it receives a 4", () => {
    it("Then it should return a 3", () => {
      const n = 4;  

      const resultFibonacciFunction = recursiveFibonacci(n);
      const expectedResult = 3;

      expect(resultFibonacciFunction).toBe(expectedResult);
    })
  })

  describe("When it receives a 10", () => {
    it("Then it should return a 55", () => {
      const n = 10;  

      const resultFibonacciFunction = recursiveFibonacci(n);
      const expectedResult = 55;

      expect(resultFibonacciFunction).toBe(expectedResult);
    })
  })
})
