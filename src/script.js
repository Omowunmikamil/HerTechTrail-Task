const body = document.getElementById("body");
const button = document.getElementById("btn");
const historyDiv = document.getElementById("history");

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

const colorHistory = [];

function changeBackground() {
  const colorIndex = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
  colorHistory.push(colors[colorIndex]);
  showHistory();
}

function showHistory() {
  historyDiv.innerHTML = "";
  colorHistory.forEach((color) => {
    const div = document.createElement("div");
    div.className = "history-div";
    div.style.backgroundColor = color;
    historyDiv.appendChild(div);
  });
}

button.addEventListener("click", changeBackground);
