console.clear();

const animalStrings = [
  "cat",
  "dog",
  "elephant",
  "rabbit",
  "lion",
  "tiger",
  "horse",
  "giraffe",
  "zebra",
  "penguin",
  "polar bear",
  "panda",
  "koala",
  "kangoroo",
  "monkey",
  "sloth",
  "hippo",
  "rhino",
];

console.log(animalStrings);
const hippoExists = animalStrings.includes("hippo");
console.log(hippoExists);

// Start of Selection
// Hint: You can pass the starting index as second parameter.
const catStartingFromIndexFiveExists = animalStrings.includes("cat", 5);
console.log(catStartingFromIndexFiveExists);

// Hint: Besides the array method, check out the string method `startsWith()`.

const firstAnimalStartingWithLetterP = animalStrings.find((animal) =>
  animal.toUpperCase().startsWith("P")
);
console.log(firstAnimalStartingWithLetterP);

//

const indexOfGiraffe = animalStrings.findIndex((animal) =>
  animal.includes("giraffe")
);
console.log(indexOfGiraffe);

// Note:
// - Sorting strings is slightly more complicated than sorting numbers.
// - You will need if-statements and return values of -1, 1, and 0.
// - Check out MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Hint: There is no need to upper-/lowercase the strings before sorting them.
// Hint: sort() mutates the original array, which is bad.
// -> Use animals.slice().sort(...) to make a copy.
const animalsSortedAlphabetically = animalStrings.slice().sort((a, b) => {
  const nameA = a.toUpperCase(); // ignore upper and lowercase
  const nameB = b.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
console.log(animalsSortedAlphabetically);

// Hint: Guess what? There is a string method called `endsWith()`.
const anyAnimalEndsWithLetterZ = animalStrings.filter((animal) =>
  animal.endsWith("z")
);
console.log(anyAnimalEndsWithLetterZ);

//

const everyAnimalHasMoreThanTwoLetters = animalStrings.filter(
  (animal) => animal.length > 2
);
console.log(
  "everyAnimalHasMoreThanTwoLetters: " + everyAnimalHasMoreThanTwoLetters
);

// Hint: There are several ways to go here. Let's focus on two options:
// Option 1: Concatenate all characters with `reduce()` and check for the `length` property of the result.
// Option 2: Use `map()` to create an array with the length values of all strings,
// 				then sum them up with `reduce()` (keyword: method chaining)

const sumOfAllAnimalCharacters = animalStrings.reduce((a, b) => a + b);
console.log(sumOfAllAnimalCharacters.length);
// const sum = numbers.reduce((a, b) => a + b);

export {
  hippoExists,
  catStartingFromIndexFiveExists,
  firstAnimalStartingWithLetterP,
  indexOfGiraffe,
  animalsSortedAlphabetically,
  anyAnimalEndsWithLetterZ,
  everyAnimalHasMoreThanTwoLetters,
  sumOfAllAnimalCharacters,
};
