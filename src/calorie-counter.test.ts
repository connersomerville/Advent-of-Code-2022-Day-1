import { describe, it, expect } from "vitest";
import { countCalories } from "./calorie-counter.js";

describe("Calorie Counter", () => {
  it.concurrent("returns the sum of calorie array", () => {
    expect(
      countCalories({
        items: [1000, 2000, 3000],
      })
    ).toEqual(6000);

    expect(
      countCalories({
        items: [4000],
      })
    ).toEqual(4000);
  });

  it.concurrent("ignores negative numbers", () => {
    expect(
      countCalories({
        items: [1000, -2000, 3000],
      })
    ).toEqual(4000);
  });

  it.concurrent("returns 0 if array is empty", () => {
    expect(
      countCalories({
        items: [],
      })
    ).toEqual(0);
  });
});
