const isAnagram = require('./solution');

describe('Anagram', () => {
  test('returns true for anagrams', () => {
    expect(isAnagram("listen", "silent")).toBe(true);
  });

  test('returns false for non-anagrams', () => {
    expect(isAnagram("hello", "world")).toBe(false);
    expect(isAnagram("abc", "def")).toBe(false);
  });

  test('handles case differences', () => {
    expect(isAnagram("Listen", "Silent")).toBe(true);
  });

  test('handles phrase anagrams', () => {
    expect(isAnagram("astronomer", "moon starer")).toBe(true);
  });
});
