import Calculator from "../calculator";

describe("Add", () => {
  test("Adding two positive integers", () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });

  test("Adding two larger integers", () => {
    expect(Calculator.add(720, 111)).toBe(831);
  });

  test("Adding negative int with positive int", () => {
    expect(Calculator.add(-11, 2)).toBe(-9);
  });
});

describe("Substract", () => {
  test("Substracts numbers", () => {
    expect(Calculator.substract(2, 1)).toBe(1);
  });

  test("Substracts negative from negative", ()=> {
    expect(Calculator.substract(-2,-1)).toBe(-1)
  })

  test("Works with 0", () => {
    expect(Calculator.substract(0,0)).toBe(0)
  })
});

describe("Divide", () => {
  test("Divides positive numbers", () => {
    expect(Calculator.divide(6, 3)).toBe(2);
  });

  test("Divides negative numbers", ()=> {
    expect(Calculator.divide(-10,-2)).toBe(5)
  })

  test("Returns fractions", () => {
    expect(Calculator.divide(5,2)).toBe(2.5)
  })
  test("Works with 0", () => {
    expect(Calculator.divide(0,0)).toBe(NaN)
  })
});

describe("Multiply", () => {
  test("Multiplies positive numbers", () => {
    expect(Calculator.multiply(6, 3)).toBe(18);
  });

  test("Multiples negative numbers", ()=> {
    expect(Calculator.multiply(-10,-2)).toBe(20)
  })

  test("Returns fractions", () => {
    expect(Calculator.multiply(5,2.5)).toBe(12.5)
  })
  test("Works with 0", () => {
    expect(Calculator.multiply(0,0)).toBe(0)
  })
});