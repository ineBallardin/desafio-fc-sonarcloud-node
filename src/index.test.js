const uniquePaths = require('./index')

describe('uniquePaths Function', () => {

    // Test 1
    it('should return 28 when m=3 and n=7', () => {
      expect(uniquePaths(3, 7)).toBe(28);
    });
  
    // Test 2
    it('should return 3 when m=3 and n=2', () => {
      expect(uniquePaths(3, 2)).toBe(3);
    });
});