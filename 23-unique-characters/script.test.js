const isUnique = require("./script.js").isUnique;

test("should return right boolean", () => {
  expect(isUnique("blue")).toBe(true);
  expect(isUnique("minira")).toBe(false);
});

test("should return warning in case of an empty string or a number", () => {
  expect(isUnique("")).toBe("Please enter a word");
  expect(isUnique(2)).toBe("Please enter a word");
});
