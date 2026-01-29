const { add } = require('./script');

describe('Calculator', () => {
  
  describe('add()', () => {
    it('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });
    
    it('adds negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });
  });
});