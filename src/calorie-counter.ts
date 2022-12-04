type CountCalories = { items: number[] };
export const countCalories = ({ items }: CountCalories) => {
  let total = 0;

  items.filter((item) => item >= 0).forEach((item) => (total += item));

  return total;
};
