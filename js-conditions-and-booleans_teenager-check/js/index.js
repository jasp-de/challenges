const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);
  if (age >= 13 && age <= 19) console.log("You are a teen.");
  else {
    console.log("You are not a teen.");
  }
});