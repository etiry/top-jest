const caesarCipher = require("../src/caesarCipher");

test("string is encrypted correctly with shift factor of 5", () => {
  expect(caesarCipher("london", 5)).toBe("qtsits");
});

test("string is encrypted correctly when it has to wrap to beginning of alphabet", () => {
  expect(caesarCipher("fizz", 5)).toBe("knee");
});

test("string is encrypted correctly with a shift factor greater than 26", () => {
  expect(caesarCipher("fizz", 100)).toBe("bevv");
});

test("is case sensitive", () => {
  expect(caesarCipher("LonDon", 5)).toBe("QtsIts");
});

test("accounts for punctuation", () => {
  expect(caesarCipher("The End", 13)).toBe("Gur Raq");
});
