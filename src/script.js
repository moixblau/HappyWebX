const checkBtn = document.getElementById("checkButton");

if (checkBtn) {
  checkBtn.onclick = function () {
    console.log("hola");

    fetch('http://happyx.moixblau.com/Record/health')
       .then(response => response.text())
       .then(text => console.log(text))
  };
}

//Select random emoji for tittle
const emojis = [
  "😂",
  "😨",
  "😖",
  "😞",
  "🤣",
  "😊",
  "😗",
  "🥰",
  "🤩",
  "😢",
  "😭",
  "😁",
  "🤨",
  "😡",
];
const randomIndex = Math.floor(Math.random() * emojis.length);
const item = emojis[randomIndex];

document.getElementById("tittle").innerHTML = "Token " + item;

function success() {
  if (document.getElementById("tokenInput").value === "") {
    document.getElementById("checkButton").disabled = true;
  } else {
    document.getElementById("checkButton").disabled = false;
  }
}
