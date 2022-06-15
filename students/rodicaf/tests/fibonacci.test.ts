import {fibrec, fibit} from '../src/fibonacci';

describe("Given a fibrec function", () => {
    it("It returns 34 when given 9 as a parameter", () => {
        //assert
        const expectedResult = fibrec(9);
        //assess  
        expect(expectedResult).toBe(34);
    })
}) 