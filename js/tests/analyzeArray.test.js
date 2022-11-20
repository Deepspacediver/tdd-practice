import analyzeArray from "../analyzeArray";

test("Gets average", () => {
  expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4)
  expect(analyzeArray([1,8,3,4,2,2]).average).toBe(3)
})

test("finds min", () => {
  expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1)
  expect(analyzeArray([1,8,3,4,2,0]).min).toBe(0)
})


test("finds max", () => {
  expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8)
  expect(analyzeArray([1,12,3,4,2,0]).max).toBe(12)
})

test("gets length", () => {
  expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6)
  expect(analyzeArray([1,12,3,4,2,0,2]).length).toBe(7)
})