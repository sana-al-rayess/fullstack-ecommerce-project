const quote = document.getElementById("quote");
const text = "Experience the magic of our timeless pieces!";
let index = 0;

function writeText() {
  quote.textContent = text.slice(0, index++);
  if (index > text.length) {
    index = 0;
    setTimeout(writeText, 1200);
  } else {
    setTimeout(writeText, 100);
  }
}

writeText();

