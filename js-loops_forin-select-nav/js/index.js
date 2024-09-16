console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--
for (item in languages) {
  const option = document.createElement("option");
  option.value = item;
  option.textContent = languages[item];
  select.appendChild(option);
  console.log(option.textContent);
}
// --^-- write/change code here --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
  test: { href: "/test", text: "test" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--
for (const item in nav) {
  const li = document.createElement("li"); // Create a list item
  const anchor = document.createElement("a"); // Create an anchor tag

  // Set the anchor's href and textContent
  anchor.href = nav[item].href;
  anchor.textContent = nav[item].text;

  // Append the anchor to the list item, and list item to the ul
  li.appendChild(anchor);
  ul.appendChild(li);

  console.log(anchor.textContent); // Check the text of each anchor
}
