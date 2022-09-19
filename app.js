const root = document.getElementById("root");

const colorArr = [
  "#55efc4",
  "#81ecec",
  "#74b9ff",
  "#a29bfe",
  "#dfe6e9",
  "#00b894",
  "#00cec9",
  "#0984e3",
  "#6c5ce7",
  "#b2bec3",
  "#ffeaa7",
  "#fab1a0",
  "#ff7675",
  "#fd79a8",
  "#636e72",
  "#fdcb6e",
  "#e17055",
  "#d63031",
  "#e84393",
  "#2d3436",
];

function colorBox(color) {
  const newDiv = document.createElement("div");
  const isDiv = root.appendChild(newDiv);
  isDiv.style.backgroundColor = `${color} `;
  isDiv.addEventListener("click", colorCopy);
}

function drawDiv() {
  for (let i = 0; i < colorArr.length; i++) {
    colorBox(colorArr[i]);
  }
}

function colorCopy(event) {
  const color = event.target.style.backgroundColor;
  const rgbToHEx =
    "#" +
    color
      .slice(4, -1)
      .split(",")
      .map((x) => (+x).toString(16).padStart(2, 0))
      .join("");
  console.log(rgbToHEx);
}

drawDiv();
