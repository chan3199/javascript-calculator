import { getResult } from "../js/calculator";

describe("calculate Test", () => {
  test("add", () => {
    expect(getResult(["5", "+", "2"])).toBe("7");
  });
  test("minus", () => {
    expect(getResult(["12.5", "-", "2.5"])).toBe("10");
  });
  test("multiply", () => {
    expect(getResult(["6", "*", "4"])).toBe("24");
  });
  test("divide", () => {
    expect(getResult(["15", "/", "3"])).toBe("5");
  });
  test("priority test 1", () => {
    expect(getResult(["4", "+", "2", "*", "3.5"])).toBe("11");
  });
  test("priority test 2", () => {
    expect(getResult(["10", "-", "6", "/", "3"])).toBe("8");
  });
});
