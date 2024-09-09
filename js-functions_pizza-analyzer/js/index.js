console.clear();

let pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
let pizza1 = document.querySelector('[data-js="pizza-1"]');
let pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
let pizza2 = document.querySelector('[data-js="pizza-2"]');
let outputSection = document.querySelector('[data-js="output-section"]');
let output = document.querySelector('[data-js="output"]');

let diameter1 = 24;
let diameter2 = 24;

// Task 1 - Function to calculate pizza gain
function calculatePizzaGain() {
  let area1 = Math.PI * Math.pow(diameter1 / 2, 2); // Area of pizza 1
  let area2 = Math.PI * Math.pow(diameter2 / 2, 2); // Area of pizza 2
  let gain = ((area2 - area1) / area1) * 100; // Percentage gain
  let gainRounded = Math.round(gain); // Rounded value

  console.log("Gain: " + gainRounded + "%");
  output.textContent = gainRounded; // Update the output in the HTML
}

// Task 2 - Function to update pizza display sizes
function updatePizzaDisplay() {
  let newSize1 = (diameter1 / 24) * 100; // Scaling the pizza size for display
  let newSize2 = (diameter2 / 24) * 100;

  pizza1.style.width = newSize1 + "px"; // Update pizza 1 size
  pizza2.style.width = newSize2 + "px"; // Update pizza 2 size
}

// Task 3 - Function to update the output color
function updateOutputColor() {
  let newSize1 = (diameter1 / 24) * 100;
  let newSize2 = (diameter2 / 24) * 100;

  // Select the output display section
  const outputDisplay = document.querySelector('[data-js="output-section"]');

  // Update background color based on pizza size comparison
  if (newSize1 > newSize2) {
    outputDisplay.style.backgroundColor = "var(--red)";
  } else if (newSize1 < newSize2) {
    outputDisplay.style.backgroundColor = "var(--green)";
  } else {
    outputDisplay.style.backgroundColor = "var(--default-color)";
  }
}

// EVENT LISTENERS

pizzaInput1.addEventListener("input", () => {
  diameter1 = Number(pizzaInput1.value); // Get new diameter for pizza 1
  calculatePizzaGain();
  updatePizzaDisplay();
  updateOutputColor();
});

pizzaInput2.addEventListener("input", () => {
  diameter2 = Number(pizzaInput2.value); // Get new diameter for pizza 2
  calculatePizzaGain();
  updatePizzaDisplay();
  updateOutputColor();
});
