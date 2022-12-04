import { describe, it, expect } from "vitest";
import { insertRanking } from "./ranking.js";

describe("Ranking", () => {
  it.concurrent("inserts at the correct position", () => {
    expect(
      insertRanking({
        rankings: [3000, 2000, 1000],
        newRank: 1500,
      })
    ).toEqual([3000, 2000, 1500]);

    expect(
      insertRanking({
        rankings: [3000, 2000, 1000],
        newRank: 2500,
      })
    ).toEqual([3000, 2500, 2000]);

    expect(
      insertRanking({
        rankings: [3000, 2000, 1000],
        newRank: 3500,
      })
    ).toEqual([3500, 3000, 2000]);
  });
  it.concurrent("inserts in empty array", () => {
    expect(
      insertRanking({
        rankings: [],
        newRank: 2500,
      })
    ).toEqual([2500]);
  });
  it.concurrent("returns rankings if new rank is out of range", () => {
    expect(
      insertRanking({
        rankings: [3000, 2000, 1000],
        newRank: 500,
      })
    ).toEqual([3000, 2000, 1000]);
  });
});
