import capitalizeString from "../capitalize";

test("Capitalizes one word", () => {
  expect(capitalizeString("hello")).toBe("Hello");
});

test("Capitalizes a sentence", () => {
  expect(capitalizeString("this is my dog")).toBe("This is my dog");
});

test("If parameter not provided, return empty string", () => {
  expect(capitalizeString("")).toBe("");
});
