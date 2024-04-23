const analyzeArray = require("../src/analyzeArray");

test("returns an object", () => {
  expect(typeof analyzeArray([1, 2, 3])).toBe("object");
});

test("has the expected properties", () => {
  const test_array = analyzeArray([1, 2, 3]);

  expect(test_array).toHaveProperty("average");
  expect(test_array).toHaveProperty("min");
  expect(test_array).toHaveProperty("max");
  expect(test_array).toHaveProperty("length");
});

test("returns correct values", () => {
  test_array = analyzeArray([1, 2, 3]);

  expect(test_array.average).toEqual(2);
  expect(test_array.min).toEqual(1);
  expect(test_array.max).toEqual(3);
  expect(test_array.length).toEqual(3);
});
