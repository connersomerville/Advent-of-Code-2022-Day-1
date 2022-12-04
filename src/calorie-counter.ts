type CaloriesInBag = { items: number[] };
export const caloriesInBag = ({ items }: CaloriesInBag) => {
  let total = 0;

  items.filter((item) => item >= 0).forEach((item) => (total += item));

  return total;
};
