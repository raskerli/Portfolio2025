// Progress Bar
window.onscroll = function () {
  const scroll = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (scroll / height) * 100;
  document.getElementById("progress-bar").style.width = scrolled + "%";
};

// Highlight Navbar Links Based on Section
const sections = document.querySelectorAll(".full-screen-section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Interactive Contact Icons
document.querySelectorAll(".contact-icon").forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.style.animation = "none";
  });
  icon.addEventListener("mouseout", () => {
    icon.style.animation = "bounce 2s infinite";
  });
});

// Fun Facts Hover Effect
const factBoxes = document.querySelectorAll(".fact-box");

factBoxes.forEach((box) => {
  box.addEventListener("mouseover", () => {
    box.style.transform = "translateY(-10px)";
    box.style.backgroundColor = "#DDA853";
    box.style.color = "#FBF5DD";
  });
  box.addEventListener("mouseout", () => {
    box.style.transform = "translateY(0)";
    box.style.backgroundColor = "#FBF5DD";
    box.style.color = "#16404D";
  });
});

// Carousel Logic for Projects
const projectItems = document.querySelectorAll(".project-item");
let currentProjectIndex = 0;

function showProject(index) {
  projectItems.forEach((item, i) => {
    item.classList.remove("active");
    if (i === index) {
      item.classList.add("active");
    }
  });
}

document.getElementById("prevProject").addEventListener("click", () => {
  currentProjectIndex =
    (currentProjectIndex - 1 + projectItems.length) % projectItems.length;
  showProject(currentProjectIndex);
});

document.getElementById("nextProject").addEventListener("click", () => {
  currentProjectIndex = (currentProjectIndex + 1) % projectItems.length;
  showProject(currentProjectIndex);
});

// Initialize the first project as active
showProject(currentProjectIndex);
