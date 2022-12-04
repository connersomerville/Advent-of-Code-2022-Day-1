import { countCalories } from "./calorie-counter.js";
import { insertRanking } from "./ranking.js";
import { getLineReader } from "./reader.js";

const args = process.argv.slice(2);
const filePath = args[0] || "test/fixtures/input.txt";

const lineReader = getLineReader({
  filePath,
});

let currentElf = 1;
let largestBagPacks = [0, 0, 0];
const bagPacks = new Map<number, number[]>();

const checkCurrentBag = ({
  currentBag,
  elf,
}: {
  currentBag?: number[];
  elf: number;
}) => {
  const totalCalories = countCalories({
    items: currentBag || [],
  });
  console.log(
    `Elf ${elf} has the following bag ${JSON.stringify(
      currentBag
    )} totalling ${totalCalories} calories`
  );

  largestBagPacks = insertRanking({
    rankings: largestBagPacks,
    newRank: totalCalories,
  });
};

lineReader.on("line", (line) => {
  const currentBag = bagPacks.get(currentElf);

  if (!line.length) {
    checkCurrentBag({
      currentBag,
      elf: currentElf,
    });

    return (currentElf += 1);
  }

  bagPacks.set(
    currentElf,
    currentBag ? [...currentBag, Number(line)] : [Number(line)]
  );
});

lineReader.on("close", () => {
  // check the last bag
  const currentBag = bagPacks.get(currentElf);
  checkCurrentBag({
    currentBag,
    elf: currentElf,
  });

  const maxCalories = largestBagPacks[0];
  const totalCalories = countCalories({
    items: largestBagPacks,
  });
  console.log(`Max calories is ${maxCalories}`);
  console.log(`Total calories is ${totalCalories}`);
  console.log(
    `The largest backpacks are as follows ${JSON.stringify(largestBagPacks)}`
  );
});
