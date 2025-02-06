const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const colorName = document.getElementById("background-name");

btn.addEventListener("click", function () {
  let randomColor = "#";

  for (let i = 0; i < 6; i++) {
    randomColor += colors[getRandomColorIndex()];
  }

  document.body.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
});

//function to convert rgb to hex
function getRandomColorIndex() {
  return Math.floor(Math.random() * colors.length);
}

const links = document.querySelectorAll(".no-underline");

links.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove active class from all links
    links.forEach((l) => l.classList.remove("active"));

    // Add active class to the clicked link
    this.classList.add("active");
  });
});
