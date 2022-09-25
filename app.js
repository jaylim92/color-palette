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
  colorCopyBtn(isDiv, color);

  isDiv.addEventListener("mouseenter", (event) => {
    const btn = event.target.firstChild;
    btn.classList.remove("hidden");
  });
  isDiv.addEventListener("mouseleave", (event) => {
    const btn = event.target.firstChild;
    btn.classList.add("hidden");
  });
}

function copiedAlert(color) {
  const copiedColorContainer = document.querySelector("#copiedColorContainer");
  const colorCodeText = document.querySelector("#colorCodeText");
  copiedColorContainer.style.backgroundColor = `${color}`;
  colorCodeText.innerText = `${color}`;
  copiedColorContainer.style.visibility = "visible";
  setTimeout(() => {
    copiedColorContainer.style.visibility = "hidden";
  }, 800);
}

function colorCopy(event) {
  const colorCategoty = document.querySelector("#color-category");
  const color = event.target.style.backgroundColor;
  const rgbToHEx =
    "#" +
    color
      .slice(4, -1)
      .split(",")
      .map((x) => (+x).toString(16).padStart(2, 0))
      .join("");
  if (colorCategoty.options[colorCategoty.selectedIndex].value === "hex") {
    copyToClipboard(rgbToHEx);
    console.log(rgbToHEx);
    copiedAlert(rgbToHEx);
  } else if (
    colorCategoty.options[colorCategoty.selectedIndex].value === "rgb"
  ) {
    copyToClipboard(color);
    copiedAlert(color);
    console.log(color);
  }
}

function colorCopyBtn(div, color) {
  const copyBtn = document.createElement("div");
  copyBtn.classList.add("buttonStyle");
  copyBtn.textContent = "copy";
  copyBtn.classList.add("hidden");
  copyBtn.style.backgroundColor = `${color}`;
  div.append(copyBtn);
  div.addEventListener("click", colorCopy);
}

function drawDiv() {
  for (let i = 0; i < colorArr.length; i++) {
    colorBox(colorArr[i]);
  }
}

function copyToClipboard(colorCode) {
  const textarea = document.createElement("textarea");
  document.body.append(textarea);
  textarea.value = colorCode;
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

drawDiv();
