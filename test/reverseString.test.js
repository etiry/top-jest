const reverseString = require("../src/reverseString");

test("string is reversed", () => {
  expect(reverseString("london")).toBe("nodnol");
});
