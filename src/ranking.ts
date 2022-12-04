type InsertRanking = {
  rankings: number[];
  newRank: number;
};
export const insertRanking = ({ rankings, newRank }: InsertRanking) => {
  let carry = newRank;
  let newRanking = [];

  if (!rankings.length) {
    return [newRank];
  }

  for (const rank of rankings) {
    if (carry > rank) {
      newRanking.push(carry);
      carry = rank;
      continue;
    }

    newRanking.push(rank);
  }

  return newRanking;
};
