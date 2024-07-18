const body = document.getElementById("body");
const button = document.getElementById("btn");
const historyList = document.getElementById("history");

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
  historyList.innerHTML = "";

  colorHistory.forEach((color) => {
    const li = document.createElement("li");
    li.className = "history-list";
    li.style.backgroundColor = color;

    li.innerHTML = color;

    historyList.appendChild(li);
  });
}

button.addEventListener("click", changeBackground);
