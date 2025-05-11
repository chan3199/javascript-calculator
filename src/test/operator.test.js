import { operationalCalculate } from "../js/operator";

test("1 * 1 = 1", () => {
  expect(operationalCalculate(1, 1, "+")).toBe(2);
});
