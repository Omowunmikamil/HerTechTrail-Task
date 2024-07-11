const body = document.getElementById("body");
const button = document.getElementById("btn");

const colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "pink",
  "purple",
  "orange",
  "Aqua",
  "BlueViolet",
  "DarkCyan",
  "Coral",
  "DeepPink",
  "LawnGreen",
  "Navy",
  "Magenta",
];

function changeBackground() {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
}

button.addEventListener("click", changeBackground);
