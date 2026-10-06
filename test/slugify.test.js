const slugify = require('../src/slugify').slugify;

console.log('Testing slugify function...');

// Test cases
test('should remove double hyphens', () => {
  expect(slugify('Hello--World')).toBe('hello-world');
});

test('should remove trailing hyphens', () => {
  expect(slugify('Hello-World--')).toBe('hello-world');
});

test('should handle Unicode and spaces', () => {
  expect(slugify('  Ünïcode Café  ')).toBe('unicode-cafe');
});

console.log('All tests completed.');