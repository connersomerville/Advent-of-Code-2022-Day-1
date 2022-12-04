import { describe, it, expect } from "vitest";
import { caloriesInBag } from "./calorie-counter.js";

describe("Calorie Counter", () => {
  it.concurrent("returns the sum of calorie array", () => {
    expect(
      caloriesInBag({
        items: [1000, 2000, 3000],
      })
    ).toEqual(6000);

    expect(
      caloriesInBag({
        items: [4000],
      })
    ).toEqual(4000);
  });

  it.concurrent("ignores negative numbers", () => {
    expect(
      caloriesInBag({
        items: [1000, -2000, 3000],
      })
    ).toEqual(4000);
  });

  it.concurrent("returns 0 if array is empty", () => {
    expect(
      caloriesInBag({
        items: [],
      })
    ).toEqual(0);
  });
});
