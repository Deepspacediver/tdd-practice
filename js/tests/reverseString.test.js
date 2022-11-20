import reverseString from "../reverseString";

test("Returns reverse of one word", () => {
  expect(reverseString("one")).toBe("eno");
});

test("Returns reverse of a sentence", () => {
  expect(reverseString("I would like a cup of coffee")).toBe(
    "eeffoc fo puc a ekil dluow I"
  );
});

test("Reverse sentence with punctuation", () => {
  expect(reverseString("Hello, nice to meet you!")).toBe(
    "!uoy teem ot ecin ,olleH"
  );
});

test("Returns empty string if string not provided", () => {
  expect(reverseString("")).toBe("");
});
