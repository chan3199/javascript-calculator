import { getResult } from "../js/calculator";

describe("calculator Test", () => {
  test("사칙연산", () => {
    expect(getResult(["4", "+", "2", "*", "3.5"])).toBe("11");
  });
});
