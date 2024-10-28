console.clear();

const cards = [
  {
    id: "1",
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
  {
    id: "4",
    isBookmarked: true,
    question: "Test?",
    answer: "Test",
    tags: ["html", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((card) => card.id.match(2));
console.log(onlyCardWithIdTwo);

const allCardsWith3Tags = cards.filter((card) => card.tags.length === 3);
console.log(allCardsWith3Tags);

const allCardsThatAreNotBookmarked = cards.filter(
  (card) => card.isBookmarked === true
);
console.log(allCardsThatAreNotBookmarked);

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter(
  (card) =>
    card.isBookmarked === true &&
    (card.tags.includes("html") || card.tags.includes("js"))
);
console.log(allCardsWithTagsHTMLOrJSThatAreBookmarked);

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
