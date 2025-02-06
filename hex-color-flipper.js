// const colors = ["red", "blue", "green", "yellow"];

const btn = document.getElementById("btn");
const colorName = document.getElementById("background-name");

btn.addEventListener("click", function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  const hexColor = rgbToHex(r, g, b);
  document.body.style.backgroundColor = hexColor;
  colorName.textContent = hexColor;
});

//function to convert rgb to hex
function rgbToHex(r, g, b) {
  return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1)}`;
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
