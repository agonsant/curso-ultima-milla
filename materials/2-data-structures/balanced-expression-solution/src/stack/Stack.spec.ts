import { Stack } from "./Stack";


const initializeStack = 
    (n:number, stack: Stack<number>) => Array(n)
                                            .fill(2)
                                            .forEach(e => stack.push(e));

describe('Stack Data Structure', () => {

    let stack: Stack<number>;

    beforeEach(() => {
        stack = new Stack<number>();
    })

    it('When a stack is created, it must be an empty stack', () => {
        expect(stack.isEmpty());
    });


    it('Given an empty stack, when pushing a new value, it should on top', () => {
        stack.push(4);
        expect(stack.getLastElement()).toBe(4);
    });

    it('Given a stack with one element, poping it should be an empty stack', () => {
        // given
        stack.push(10);
        // when
        expect(stack.pop()).toBe(10);
        expect(stack.isEmpty()).toBe(true);
    });

    it('Given a stack with n elements, poping it should return the last element and the stack should have n-1 elements', () => {
        // given
        const n = 5;
        initializeStack(n,stack);
        // then
        expect(stack.pop()).toBe(2);
        expect(stack.size()).toBe(n-1); // 5-1 elements
    });

    it('Given a stack with n elements, pushing a new element should be on top and should have n+1 elements', () => {
        // given
        const n = 5;
        initializeStack(n,stack);
        // then
        stack.push(10);
        expect(stack.getLastElement()).toBe(10);
        expect(stack.size()).toBe(n+1); 
    });

});