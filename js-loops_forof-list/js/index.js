console.clear();

const main = document.querySelector('[data-js="main"]');

// Create a list from an array

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write/change code here --v--
for (language of programmingLanguages) {
  // Create a new <li> element
  const listElement = document.createElement("li");

  // Set the text content of the <li> to the language
  listElement.textContent = language;

  // Append the <li> to the <ol>
  ol.appendChild(listElement);
}
// --^-- write/change code here --^--
