const collatz = require('./index');

describe('Collatz Conjecture Challenge', () => {
  it('should return the correct sequence for a positive integer greater than 1', () => {
    const testCases = [
      { input: 12, expectedSequence: [12, 6, 3, 10, 5, 16, 8, 4, 2, 1] },
      { input: 7, expectedSequence: [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1] },
    ];

    testCases.forEach(({ input, expectedSequence }) => {
      const result = collatz(input);
      expect(result).toEqual(expectedSequence);
    });
  });

  it('should return [1] for input 1', () => {
    expect(collatz(1)).toEqual([1]);
  });

  it('should return an empty array for input 0', () => {
    expect(collatz(0)).toEqual([]);
  });

  it('should return an empty array for no input value', () => {
    expect(collatz(undefined)).toEqual([]);
  });
});
