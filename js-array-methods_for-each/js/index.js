const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
  "#1F1F1F",
  "#2E8B57",
  "#8A2BE2",
  "#5F9EA0",
  "#D2691E",
  "#FF7F50",
  "#6495ED",
  "#FFF8DC",
  "#DC143C",
  "#00FFFF",
  "#00008B",
  "#008B8B",
  "#B8860B",
  "#A9A9A9",
  "#006400",
  "#BDB76B",
  "#8B008B",
  "#556B2F",
  "#FF8C00",
  "#9932CC",
  "#8B0000",
  "#E9967A",
  "#8FBC8F",
  "#483D8B",
  "#2F4F4F",
  "#00CED1",
  "#9400D3",
  "#FF1493",
  "#00BFFF",
  "#696969",
  "#1E90FF",
  "#B22222",
  "#FFFAF0",
  "#228B22",
  "#FF00FF",
  "#DCDCDC",
  "#F8F8FF",
  "#FFD700",
  "#DAA520",
  "#808080",
  "#008000",
  "#ADFF2F",
  "#F0FFF0",
  "#FF69B4",
  "#CD5C5C",
  "#4B0082",
  "#FFFFF0",
  "#F0E68C",
  "#E6E6FA",
  "#FFF0F5",
  "#7CFC00",
  "#FFFACD",
  "#ADD8E6",
  "#F08080",
  "#E0FFFF",
  "#FAFAD2",
  "#D3D3D3",
  "#90EE90",
  "#FFB6C1",
  "#FFA07A",
  "#20B2AA",
  "#87CEFA",
  "#778899",
  "#B0C4DE",
  "#FFFFE0",
  "#00FF00",
  "#32CD32",
  "#FAF0E6",
  "#FF00FF",
  "#800000",
  "#66CDAA",
  "#0000CD",
  "#BA55D3",
  "#9370DB",
  "#3CB371",
  "#7B68EE",
  "#00FA9A",
  "#48D1CC",
  "#C71585",
  "#191970",
  "#F5FFFA",
  "#FFE4E1",
  "#FFE4B5",
  "#FFDEAD",
  "#000080",
  "#FDF5E6",
  "#808000",
  "#6B8E23",
  "#FFA500",
  "#FF4500",
  "#DA70D6",
  "#EEE8AA",
  "#98FB98",
  "#AFEEEE",
  "#DB7093",
  "#FFEFD5",
  "#FFDAB9",
  "#CD853F",
  "#FFC0CB",
  "#DDA0DD",
  "#B0E0E6",
  "#800080",
  "#663399",
  "#FF0000",
  "#BC8F8F",
];

function renderColorBox(color) {
  const colorDiv = document.createElement("div");
  colorDiv.classList.add("color-box");
  colorDiv.style.backgroundColor = color;
  document.body.appendChild(colorDiv);
}

colors.forEach(renderColorBox);

const button = document.createElement("button");
button.textContent = "Stop Changing Colors";
document.body.insertBefore(button, document.body.firstChild);

let intervalId;

function changeColors() {
  const colorDivs = document.querySelectorAll(".color-box");
  let index = 0;

  function changeNextColor() {
    if (index < colorDivs.length) {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
        16
      )}`;
      colorDivs[index].style.backgroundColor = randomColor;
      index++;
      setTimeout(changeNextColor, 100); // Change the next color after 100ms
    }
  }

  changeNextColor();
}

function startChangingColors() {
  intervalId = setInterval(changeColors, 1000);
}

button.addEventListener("click", () => {
  clearInterval(intervalId);
});

startChangingColors();
