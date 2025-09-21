// main variables
const toggle = document.querySelector(".mood");
let barMenue = document.querySelector(".bar");
const skills = document.querySelector(".skills");
const spanProg = document.querySelectorAll(".skills .cont .data .prog");

// toggle dark mood
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  let mood = JSON.parse(localStorage.getItem("mood"));

  //   check the dark or light
  if (document.body.classList.contains("dark")) {
    toggle.innerHTML = `<i class="fa-solid fa-sun"></i>`;

    localStorage.setItem("mood", JSON.stringify("dark"));
  } else {
    toggle.innerHTML = `<i class="fa-solid fa-moon"></i>`;
    localStorage.setItem("mood", JSON.stringify("light"));
  }
});

// function when onload the page to save state
window.addEventListener("load", () => {
  let mood = JSON.parse(localStorage.getItem("mood"));
  document.body.classList.toggle(mood);
  trys();
});

//start bar menu
barMenue.onclick = function () {
  document.querySelector(".links").classList.toggle("on-mobile");
};

// animation of skills
window.onscroll = function () {
  // Animation section about me
  if (window.scrollY >= document.querySelector(".about").offsetTop - 500) {
    document.querySelector(".about .img").style.left = "0";
    document.querySelector(".about ").style.left = "0";
  }
  // Animation section skills
  if (window.scrollY >= skills.offsetTop - 200) {
    spanProg.forEach((span) => {
      span.style.width = span.dataset.prog;
    });
  }
  // Animation section Project
  if (window.scrollY >= document.querySelector(".project").offsetTop - 200) {
    document.querySelector(".project .boxs").style.left = "0";
  }
  // Animation section contact
  if (window.scrollY >= document.querySelector(".contact").offsetTop - 500) {
    document.querySelector(".contact").style.left = "0";
    // Animation section footer
    document.querySelector("footer").style.left = "0";
  }
};

function trys() {
  document.querySelector(".landing-page .img").style.left = "0";
  document.querySelector(".landing-page .info").style.left = "0";
}
