import ceaserCipher from "../ceaserCipher";

test("Shifts lower case letters", () => {
  expect(ceaserCipher("a", 1)).toBe("b"),
    expect(ceaserCipher("b", 1)).toBe("c");
  expect(ceaserCipher("a", 3)).toBe("d");
  expect(ceaserCipher("z", 1)).toBe("a");
  expect(ceaserCipher("y", 25)).toBe("x");
});

test("Shifts lower-cased strings", () => {
  expect(ceaserCipher("abba", 1)).toBe("bccb");
  expect(ceaserCipher("zorro", 1)).toBe("apssp");
});

test("Shifts lower-cased sentence", () => {
  expect(ceaserCipher("hello this is ceaser z", 1)).toBe(
    "ifmmp uijt jt dfbtfs a"
  );
  expect(ceaserCipher("hello this is ceaser z", 25)).toBe(
    "gdkkn sghr hr bdzrdq y"
  );
});
