import { caloriesInBag } from "./calorie-counter.js";
import { getLineReader } from "./reader.js";

const args = process.argv.slice(2);
const filePath = args[0] || "test/fixtures/input.txt";

const lineReader = getLineReader({
  filePath,
});

let currenElf = 1;
let maxCalories = 0;
const bagPacks = new Map<number, number[]>();

lineReader.on("line", (line) => {
  const currentBag = bagPacks.get(currenElf);

  if (!line.length) {
    const totalCalories = caloriesInBag({
      items: currentBag || [],
    });
    console.log(
      `Elf ${currenElf} has the following bag ${JSON.stringify(
        currentBag
      )} totalling ${totalCalories} calories`
    );

    if (totalCalories > maxCalories) {
      maxCalories = totalCalories;
    }

    return (currenElf += 1);
  }

  bagPacks.set(
    currenElf,
    currentBag ? [...currentBag, Number(line)] : [Number(line)]
  );
});

lineReader.on("close", () => {
  console.log(`Max calories is ${maxCalories}`);
});
