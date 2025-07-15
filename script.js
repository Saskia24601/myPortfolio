window.addEventListener("scroll", function () {
  const header = this.document.getElementById("header");
  if (this.window.scrollY > 700) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const words = [
  " a Developer",
  " a Mummy",
  "a Baker",
  "a Designer",
  " a Wife",
  "a Foodie",
  "Driven",
  "Hard Working",
  "Dedicated",
];
const rotatingElement = document.getElementById("rotating-words");
let index = 0;

function rotateWords() {
  // Fade out
  rotatingElement.style.opacity = 0;

  setTimeout(() => {
    // Change text
    index = (index + 1) % words.length;
    rotatingElement.textContent = words[index];
    // Fade in
    rotatingElement.style.opacity = 1;
  }, 500);
}

setInterval(rotateWords, 3000); // change word every 3 seconds
