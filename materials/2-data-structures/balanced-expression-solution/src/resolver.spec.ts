import { resolveBalancedExpression } from "./resolver";


describe('Balanced Expression Resolver', () => {

    it('Given an empty expression, it should be balanced', () => {
        expect(resolveBalancedExpression('')).toBe(true);
    });

    it('Given a balanced expression, it should be balanced', () => {
        expect(resolveBalancedExpression('[({[]})]')).toBe(true);
        expect(resolveBalancedExpression('()')).toBe(true);
        expect(resolveBalancedExpression('()()')).toBe(true);
    });

    it('Given a non balanced expression, it should not be balanced', () => {
        expect(resolveBalancedExpression('[{}')).toBe(false);
        expect(resolveBalancedExpression('([)]')).toBe(false);
        expect(resolveBalancedExpression('[(({}))}]')).toBe(false);
    });

    it('Given an expresion with no Symbol, it should not be balanced', () => {
        expect(resolveBalancedExpression('[({a[]})]')).toBe(false);
    })
});
