import { Stack } from "./stack/Stack";

const SYMBOLS: string[] = ['(', '{', '['];

const SYMBOL_BALANCED: Record<string, string> = {
    ']': '[',
    '}': '{',
    ')': '('
};

const isOpenSymbol = (symbol: string): boolean  => SYMBOLS.includes(symbol);

const isStackBalanced = (symbol: string, stack: Stack<string>): boolean => SYMBOL_BALANCED[symbol] === stack.getLastElement();

export function resolveBalancedExpression(expression: string): boolean{
    const stack = new Stack<string>();
    for(let i =0; i<expression.length; i++){
        const char = expression.charAt(i);
        if(isOpenSymbol(char)){
            stack.push(char);
        }else if(isStackBalanced(char, stack)){
            stack.pop();
        }else{
            return false;
        }
    }

    return stack.isEmpty();
}
