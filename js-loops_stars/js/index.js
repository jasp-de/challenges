console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');
let filledStars = 3;

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let counter = 1; counter <= 5; counter++) {
    // create stars and append to container
    const starImage = document.createElement("img");
    if (counter <= filledStars) {
      starImage.src = "./assets/star-filled.svg";
    } else {
      starImage.src = "./assets/star-empty.svg";
    }
    starImage.addEventListener("click", () => {
      renderStars(counter);
    });

    starContainer.append(starImage); // placing the created button into the article
  }

  //--^-- your code here --^--
}

renderStars(3);
