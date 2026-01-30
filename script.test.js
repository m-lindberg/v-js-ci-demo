const { add, subtract } = require('./script');

describe('Calculator', () => {
  
  describe('add()', () => {
    it('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });
    
    it('adds negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });
  });

  describe('subtract()', () => {
    it('subtracts two numbers', () => {
        expect(subtract(5, 3)).toBe(2);
    });
    
    it('subtracts negative numbers', () => {
        expect(subtract(-5, -3)).toBe(-2);
    });
  });
});