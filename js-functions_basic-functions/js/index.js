console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--

let books = [
  {
    title: "Title1",
    author: "Author1",
    rating: 10,
    sales: 10000,
  },
];

// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--

console.log(books[0]);

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--

function logBookData(index) {
  console.log("Title:", books[index].title);
  console.log("Author:", books[index].author);
  console.log("Rating:", books[index].rating);
  console.log("Sales:", books[index].sales);
  books[index].sales += 2;
}

logBookData(0);
console.log("increase sales by 2");
logBookData(0);

// --^-- write your code here --^--
