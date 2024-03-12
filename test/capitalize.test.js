const capitalize = require("../src/capitalize");

test("first letter is capitalized", () => {
  expect(capitalize("london")).toBe("London");
});

test("other letters are unchanged", () => {
  expect(capitalize("duPont")).toBe("DuPont");
});
